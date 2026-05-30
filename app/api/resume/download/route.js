import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Resume from '@/models/Resume';
import { getUserFromRequest } from '@/lib/auth';

// Server-side: generate PDF bytes using jsPDF + manual drawing
export async function POST(request) {
  try {
   const user = getUserFromRequest(request);

if (!user) {
  const cookieHeader = request.headers.get('cookie') || '';
  const hasNextAuthSession = cookieHeader.includes('next-auth.session-token') ||
                             cookieHeader.includes('__Secure-next-auth.session-token');
  if (!hasNextAuthSession) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
    const body = await request.json();
    const { resumeData } = body;

    if (!resumeData) return NextResponse.json({ error: 'No resume data' }, { status: 400 });

    // Return the HTML for client-side PDF generation
    // (Client uses html2canvas + jsPDF)
    return NextResponse.json({ success: true, message: 'Use client-side PDF generation' });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
