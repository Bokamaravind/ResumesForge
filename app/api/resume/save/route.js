import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Resume from '@/models/Resume';
import { getUserFromRequest } from '@/lib/auth';

export async function POST(request) {
  try {
    const user = getUserFromRequest(request);
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { resumeId, title, template, personalInfo, experience, education, skills, projects } = body;

    await connectDB();

    let resume;
    if (resumeId) {
      resume = await Resume.findOneAndUpdate(
        { _id: resumeId, userId: user.userId },
        { title, template, personalInfo, experience, education, skills, projects, updatedAt: new Date() },
        { new: true }
      );
      if (!resume) return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    } else {
      resume = await Resume.create({
        userId: user.userId,
        title: title || `${personalInfo?.name || 'My'} Resume`,
        template, personalInfo, experience, education, skills, projects,
      });
    }

    return NextResponse.json({ success: true, resumeId: resume._id });
  } catch (err) {
    console.error('Save resume error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
