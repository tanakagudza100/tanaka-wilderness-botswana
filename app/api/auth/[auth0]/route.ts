import { handleAuth } from "@auth0/nextjs-auth0";

export async function GET(
  req: Request,
  ctx: { params: Promise<{ auth0: string }> }
) {
  // Await params for Next.js 15+
  const params = await ctx.params;

  // Create handlers dynamically on each request
  const handlers = handleAuth();
  return handlers(req, { params });
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ auth0: string }> }
) {
  const params = await ctx.params;

  const handlers = handleAuth();
  return handlers(req, { params });
}