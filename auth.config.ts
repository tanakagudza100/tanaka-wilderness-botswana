import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "read:user user:email repo read:org user:follow read:project read:discussion",
        },
      },
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          githubUsername: profile.login,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (user) {
        token.id = user.id;
        if (profile?.login) {
          token.githubUsername = profile.login;
        }
      }

      if (account) {
        token.accessToken = account.access_token;
        token.accessTokenExpires = account.expires_at;

        // Store GitHub access token in user record after NextAuth creates the user
        if (account.provider === "github" && account.access_token && user?.id) {
          try {
            // Only update fields that exist on the Prisma User model.
            // The schema currently doesn't include githubAccessToken/tokenExpiresAt,
            // so store only safe metadata like name and image.
            const prisma = (await import("@/lib/prisma")).default;
            await prisma.user.update({
              where: { id: user.id },
              data: {
                name: (profile?.name || profile?.login) as string,
                image: (profile?.avatar_url as string) ?? null,
              },
            });
          } catch (error) {
            console.error("Failed to store GitHub metadata:", error);
          }
        }
      }

      if (
        token.accessTokenExpires &&
        Date.now() >= (token.accessTokenExpires as number) * 1000
      ) {
        token.error = "Unauthorized";
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.githubUsername = token.githubUsername as string;
      }

      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.error = token.error as string;

      return session;
    },
  },
} satisfies NextAuthConfig;