import { getSession as auth0GetSession } from '@auth0/nextjs-auth0';

export async function getSession() {
  try {
    const session = await auth0GetSession();
    return session;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}
