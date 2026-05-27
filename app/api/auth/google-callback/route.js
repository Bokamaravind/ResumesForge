import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import { signToken } from '@/lib/auth';

export async function GET(request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    await connectDB();
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const token = signToken({
      userId: user._id,
      name: user.name,
      email: user.email,
    });

    const response = NextResponse.redirect(new URL('/builder', request.url));
    response.cookies.set('rf_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('Google callback error:', err);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}