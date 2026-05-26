import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Top 10 ATS Resume Tips – ResumesForge',
  description: 'Learn the top 10 ATS resume tips to beat applicant tracking systems used by Indian companies.',
  keywords: 'ATS resume tips india, applicant tracking system resume, ATS friendly resume, resume keywords india',
};

const tips = [
  { number: '01', title: 'Use Simple, Clean Formatting', content: `ATS software reads your resume like a computer. Fancy designs, tables, and graphics confuse it.\n\nUse:\n✅ Simple single-column layout\n✅ Standard fonts: Arial, Calibri\n✅ Clear section headings\n✅ Plain bullet points\n\nAvoid:\n❌ Tables and text boxes\n❌ Images or graphics\n❌ Columns in work experience\n❌ Headers and footers` },
  { number: '02', title: 'Include the Right Keywords', content: `ATS systems scan your resume for keywords matching the job description. Missing keywords = automatic rejection.\n\nHow to find keywords:\n1. Read the job description carefully\n2. Identify repeated words and skills\n3. Include those exact words in your resume\n\nExample: Job says "React.js developer with REST API experience" — use exactly "React.js" and "REST API" in your resume.\n\nPro tip: Use ResumesForge's free ATS Score Checker!` },
  { number: '03', title: 'Use Standard Section Headings', content: `ATS looks for specific section names. Use these exactly:\n✅ "Work Experience" or "Professional Experience"\n✅ "Education"\n✅ "Skills" or "Technical Skills"\n✅ "Projects"\n✅ "Certifications"\n✅ "Professional Summary"\n\nAvoid creative names like "My Journey" or "Things I Know"` },
  { number: '04', title: 'Save as PDF', content: `Most modern ATS systems read PDF perfectly. Always save as PDF to preserve formatting.\n\nExceptions: Some government/PSU companies prefer .docx — check job instructions.\n\nName your file professionally:\nAravindBokam_Resume_2026.pdf\n\nNOT: resume_final_v3_new.pdf` },
  { number: '05', title: 'Quantify Your Achievements', content: `Numbers make your resume stand out to both ATS and recruiters.\n\nBefore:\n• Developed a web application\n• Improved website performance\n\nAfter:\n• Developed web application serving 1,000+ daily users\n• Improved load time by 40% using lazy loading\n\nAlways add: users served, % improvements, time saved, team size` },
  { number: '06', title: 'Tailor Resume for Each Job', content: `One resume for all jobs = low ATS score.\n\nQuick tailoring (10 minutes):\n1. Read the job description\n2. Find top 5-10 keywords\n3. Add those keywords naturally to your resume\n4. Adjust your summary for the role\n5. Save as new file and apply\n\nUse ResumesForge AI to generate role-specific content instantly!` },
  { number: '07', title: 'Contact Info at the Top', content: `Put contact info in plain text at the very top — not in headers or text boxes.\n\nMust include:\n✅ Full name (large, prominent)\n✅ Professional email\n✅ Phone number\n✅ LinkedIn URL\n✅ City and State\n✅ GitHub/Portfolio (for tech roles)\n\nProfessional email: firstname.lastname@gmail.com` },
  { number: '08', title: 'Use Action Verbs', content: `Start every bullet point with a strong action verb.\n\nFor tech roles:\nBuilt, Developed, Implemented, Designed, Deployed, Optimized, Automated, Integrated\n\nFor business roles:\nAnalyzed, Coordinated, Managed, Delivered, Streamlined, Generated\n\n❌ "Was responsible for building the backend"\n✅ "Built RESTful APIs serving 10,000+ daily requests"` },
  { number: '09', title: 'Avoid Common ATS-Killing Mistakes', content: `1. Spelling errors — "Recat" instead of "React" = keyword not found\n2. Abbreviations — write "Artificial Intelligence (AI)" first\n3. Text in images — ATS cannot read images\n4. Text boxes — ATS often ignores them completely\n5. Wrong file format — only .pdf or .docx\n6. Hidden characters from copy-pasting` },
  { number: '10', title: 'Keep It the Right Length', content: `Freshers (0-1 year): 1 page maximum\nEarly career (1-3 years): 1-2 pages\nMid-career (3+ years): 2 pages max\n\nNever add random content to fill space. A tight 1-page resume beats a padded 2-page every time.\n\nCheck your ATS score for free on ResumesForge!` },
];

export default function ATSTipsPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', lineHeight: 1.8 }}>

        <div style={{ fontSize: '.82rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>{' → '}
          <Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</Link>{' → '}
          <span>ATS Tips</span>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <span style={{ background: '#1a1f36', color: '#c9a84c', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>ATS Tips</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#1a1f36', margin: '1rem 0 .75rem', lineHeight: 1.25 }}>
            Top 10 ATS Resume Tips to Get Past Applicant Tracking Systems
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#6b7280', fontSize: '.85rem', flexWrap: 'wrap' }}>
            <span>📅 May 25, 2026</span><span>⏱ 6 min read</span><span>✍ ResumesForge Team</span>
          </div>
        </div>

        <div style={{ background: '#f0f0ec', border: '1px dashed #d1d5db', textAlign: 'center', padding: '12px', borderRadius: 6, marginBottom: '2rem', fontSize: '.72rem', color: '#9ca3af' }}>
          <strong style={{ display: 'block', fontSize: '.65rem', letterSpacing: 1, textTransform: 'uppercase', color: '#d1d5db' }}>Advertisement</strong>
          Google AdSense – 728×90 Leaderboard
        </div>

        <p style={{ fontSize: '1.05rem', color: '#374151', marginBottom: '2.5rem' }}>
          <strong>75% of resumes are rejected by ATS before a human ever reads them.</strong> ATS systems are used by almost every company in India. Here are the top 10 tips to make sure your resume passes through.
        </p>

        {tips.map((tip, i) => (
          <div key={i} style={{ marginBottom: '2rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: '#1a1f36', color: '#c9a84c', borderRadius: 10, padding: '8px 14px', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, flexShrink: 0 }}>
                {tip.number}
              </div>
              <div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#1a1f36', marginBottom: '.75rem' }}>{tip.title}</h2>
                <div style={{ fontSize: '.92rem', color: '#374151', whiteSpace: 'pre-line', lineHeight: 1.8 }}>{tip.content}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ background: 'linear-gradient(135deg, #1a1f36, #252b4a)', borderRadius: 16, padding: '2rem', textAlign: 'center', color: 'white', marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '.75rem' }}>Check Your ATS Score — Free!</h3>
          <p style={{ color: '#a5b4c8', marginBottom: '1.5rem', fontSize: '.9rem' }}>See exactly which keywords you're missing and how to improve.</p>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#1a1f36', padding: '12px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
            Check My ATS Score →
          </Link>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1a1f36', marginBottom: '1rem' }}>Related Articles</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/blog/how-to-write-resume-freshers-india-2026" style={{ display: 'block', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#1a1f36', fontWeight: 600, fontSize: '.9rem' }}>📝 How to Write a Fresher Resume →</Link>
            <Link href="/blog/how-to-get-first-job-india" style={{ display: 'block', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#1a1f36', fontWeight: 600, fontSize: '.9rem' }}>🚀 How to Get Your First Job →</Link>
          </div>
        </div>

        <Link href="/blog" style={{ color: '#c9a84c', fontWeight: 600, fontSize: '.88rem' }}>← All Articles</Link>
      </div>
    </>
  );
}