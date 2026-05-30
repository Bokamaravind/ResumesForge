import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function getUserFromRequest(request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const token = cookieHeader
    .split(';')
    .find(c => c.trim().startsWith('rf_token='))
    ?.split('=')[1];

  if (!token) return null;
  return verifyToken(token);
}

export function isAuthorized(request) {
  // Check normal JWT login
  const user = getUserFromRequest(request);
  if (user) return true;

  // Check Google login (NextAuth session)
  const cookieHeader = request.headers.get('cookie') || '';
  return cookieHeader.includes('next-auth.session-token') ||
         cookieHeader.includes('__Secure-next-auth.session-token');
}