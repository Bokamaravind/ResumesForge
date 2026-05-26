import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Resume Tips & Career Advice Blog – ResumesForge',
  description: 'Free resume writing tips, ATS advice, and career guidance for job seekers in India.',
  keywords: 'resume tips india, how to write resume, ATS resume tips, fresher resume, job search india',
};

const posts = [
  {
    slug: 'how-to-write-resume-freshers-india-2026',
    title: 'How to Write a Resume for Freshers in India 2026',
    description: 'Complete step-by-step guide for fresh graduates to write a professional resume that gets noticed by recruiters and ATS systems in India.',
    date: 'May 25, 2026',
    readTime: '8 min read',
    category: 'Resume Writing',
    emoji: '📝',
  },
  {
    slug: 'top-10-ats-resume-tips',
    title: 'Top 10 ATS Resume Tips to Get Past Applicant Tracking Systems',
    description: 'Learn how to optimize your resume for ATS software used by top Indian companies. These proven tips will help your resume reach human recruiters.',
    date: 'May 25, 2026',
    readTime: '6 min read',
    category: 'ATS Tips',
    emoji: '🎯',
  },
  {
    slug: 'how-to-get-first-job-india',
    title: 'How to Get Your First Job in India: Complete 2026 Guide',
    description: 'Practical advice for fresh graduates on finding and landing their first job in India. From resume to interview to offer letter.',
    date: 'May 25, 2026',
    readTime: '10 min read',
    category: 'Career Advice',
    emoji: '🚀',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif' }}>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#1a1f36', marginBottom: '.75rem' }}>
            Resume Tips & Career Advice
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: 560, margin: '0 auto' }}>
            Free guides to help Indian job seekers write better resumes and land their dream jobs.
          </p>
        </div>

        <div style={{ background: '#f0f0ec', border: '1px dashed #d1d5db', textAlign: 'center', padding: '12px', borderRadius: 6, marginBottom: '2rem', fontSize: '.72rem', color: '#9ca3af' }}>
          <strong style={{ display: 'block', fontSize: '.65rem', letterSpacing: 1, textTransform: 'uppercase', color: '#d1d5db' }}>Advertisement</strong>
          Google AdSense – 728×90 Leaderboard
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem', height: '100%', cursor: 'pointer' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.emoji}</div>
                <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                  <span style={{ background: '#1a1f36', color: '#c9a84c', padding: '3px 10px', borderRadius: 20, fontSize: '.72rem', fontWeight: 600 }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '.72rem', display: 'flex', alignItems: 'center' }}>
                    {post.readTime}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#1a1f36', marginBottom: '.75rem', lineHeight: 1.4 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '.85rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {post.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '.78rem', color: '#9ca3af' }}>{post.date}</span>
                  <span style={{ color: '#c9a84c', fontSize: '.85rem', fontWeight: 600 }}>Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1a1f36, #252b4a)', borderRadius: 16, padding: '2.5rem', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', marginBottom: '.75rem' }}>
            Ready to Build Your Resume?
          </h2>
          <p style={{ color: '#a5b4c8', marginBottom: '1.5rem', fontSize: '.95rem' }}>
            Use our free AI-powered resume builder to create a professional resume in minutes.
          </p>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#1a1f36', padding: '12px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            Build My Resume Free →
          </Link>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/" style={{ color: '#6b7280', fontSize: '.88rem' }}>← Back to Home</Link>
        </div>
      </div>
    </>
  );
}