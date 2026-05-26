import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'How to Write a Resume for Freshers in India 2026 – ResumesForge',
  description: 'Complete step-by-step guide for fresh graduates to write a professional resume in India 2026.',
  keywords: 'fresher resume india 2026, how to write resume for freshers, first resume india, btech fresher resume',
};

const sections = [
  {
    title: '1. Start With a Strong Professional Summary',
    content: `The professional summary is the first thing recruiters read. As a fresher, use it to highlight your degree, key skills, and what value you bring.

Example for a B.Tech CSE graduate:
"Motivated Computer Science Engineer with strong foundation in React.js, Node.js, and Python. Passionate about building scalable web applications and solving complex problems. Quick learner with hands-on project experience in full-stack development, seeking an opportunity to contribute to a dynamic software team."

Key tips:
- Keep it to 2-3 sentences
- Mention your degree and specialization
- Include your top 2-3 technical skills
- Show enthusiasm and willingness to learn
- Never use "I" — write in third person`,
  },
  {
    title: '2. Education Section — Your Most Important Section',
    content: `As a fresher, your education is your strongest asset. List it prominently after your summary.

Format:
Degree Name | College Name, City | Year | CGPA/Percentage

Example:
B.Tech Computer Science Engineering | GIITS, Visakhapatnam | 2022–2026 | 8.2 CGPA
Diploma in CSE | Sankethika Polytechnic, Vizag | 2020–2023 | 84%

Tips:
- Always include your CGPA if above 7.0
- Include all levels of education
- Put most recent education first
- Include relevant certifications (NxtWave, Coursera, etc.)`,
  },
  {
    title: '3. Projects — Your Experience as a Fresher',
    content: `Projects are the most important section for freshers. They prove you can build real things.

For each project include:
- Project name and live link/GitHub link
- Technologies used
- What the project does (2-3 sentences)
- Your specific contribution

Example:
Wikipedia Search Application
Technologies: HTML, CSS, JavaScript, REST API
Built a responsive search application that fetches real-time Wikipedia articles. Implemented async API calls with error handling. Served 500+ test users with sub-2 second load times.

Aim for 3-4 solid projects. Quality over quantity.`,
  },
  {
    title: '4. Skills Section — Be Specific',
    content: `Don't just write "good communication skills." Be specific about technical skills.

Good skills section format:
Frontend: HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS
Backend: Node.js, Express.js, Python
Databases: MongoDB, MySQL, SQLite
Tools: Git, GitHub, VS Code, Postman, Linux

Avoid:
- "MS Office" (everyone knows this)
- "Good communication" (prove it instead)
- Skills you barely know (you'll be asked about them)`,
  },
  {
    title: '5. Work Experience (Internships)',
    content: `If you have internship experience, this goes right after your summary.

Format:
Role | Company | Duration
- Bullet point 1 (start with action verb)
- Bullet point 2

Example:
Full Stack Developer Intern | Xverse Technologies | Aug 2024 – Present
- Built 5+ responsive web applications using React.js and Node.js
- Developed REST APIs serving 1000+ daily requests with 99.9% uptime
- Implemented MongoDB database schemas reducing query time by 30%

If you have no internship — skip this section and make projects stronger.`,
  },
  {
    title: '6. Formatting Rules for Indian Recruiters',
    content: `DO:
✅ Keep resume to 1 page (freshers)
✅ Use clean, professional font (Arial, Calibri)
✅ Include phone number and email at the top
✅ Save as PDF before sending
✅ Name file: FirstName_LastName_Resume.pdf

DON'T:
❌ Add photos (not required in India anymore)
❌ Include date of birth or religion
❌ Use colored backgrounds or fancy graphics
❌ Use tables (ATS can't read them)`,
  },
  {
    title: '7. Common Fresher Resume Mistakes to Avoid',
    content: `1. Generic objective statements — "To work in a reputed company" means nothing. Be specific.
2. Listing skills you don't actually know — Recruiters will test you in interviews.
3. No quantifiable results — Add numbers wherever possible.
4. Spelling and grammar errors — Use Grammarly before sending.
5. Wrong email addresses — Use a professional email.
6. Outdated contact information — Double check your phone number.`,
  },
];

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', lineHeight: 1.8 }}>

        <div style={{ fontSize: '.82rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>{' → '}
          <Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</Link>{' → '}
          <span>Fresher Resume Guide</span>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <span style={{ background: '#1a1f36', color: '#c9a84c', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>Resume Writing</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#1a1f36', margin: '1rem 0 .75rem', lineHeight: 1.25 }}>
            How to Write a Resume for Freshers in India 2026
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#6b7280', fontSize: '.85rem', flexWrap: 'wrap' }}>
            <span>📅 May 25, 2026</span>
            <span>⏱ 8 min read</span>
            <span>✍ ResumesForge Team</span>
          </div>
        </div>

        <div style={{ background: '#f0f0ec', border: '1px dashed #d1d5db', textAlign: 'center', padding: '12px', borderRadius: 6, marginBottom: '2rem', fontSize: '.72rem', color: '#9ca3af' }}>
          <strong style={{ display: 'block', fontSize: '.65rem', letterSpacing: 1, textTransform: 'uppercase', color: '#d1d5db' }}>Advertisement</strong>
          Google AdSense – 728×90 Leaderboard
        </div>

        <p style={{ fontSize: '1.05rem', color: '#374151', marginBottom: '1.5rem' }}>
          As a fresh graduate in India, writing your first resume can feel overwhelming. The good news is that every recruiter knows you're a fresher, and they're looking for potential, not years of experience. This guide walks you through everything you need.
        </p>

        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#1a1f36', marginBottom: '1rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
              {section.title}
            </h2>
            <div style={{ fontSize: '.95rem', color: '#374151', whiteSpace: 'pre-line', lineHeight: 1.8 }}>
              {section.content}
            </div>
          </div>
        ))}

        <div style={{ background: 'linear-gradient(135deg, #1a1f36, #252b4a)', borderRadius: 16, padding: '2rem', textAlign: 'center', color: 'white', marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '.75rem' }}>Build Your Fresher Resume Now — Free!</h3>
          <p style={{ color: '#a5b4c8', marginBottom: '1.5rem', fontSize: '.9rem' }}>Create a professional ATS-friendly resume in minutes.</p>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#1a1f36', padding: '12px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
            Create My Resume Free →
          </Link>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1a1f36', marginBottom: '1rem' }}>Related Articles</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/blog/top-10-ats-resume-tips" style={{ display: 'block', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#1a1f36', fontWeight: 600, fontSize: '.9rem' }}>🎯 Top 10 ATS Resume Tips →</Link>
            <Link href="/blog/how-to-get-first-job-india" style={{ display: 'block', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#1a1f36', fontWeight: 600, fontSize: '.9rem' }}>🚀 How to Get Your First Job in India →</Link>
          </div>
        </div>

        <Link href="/blog" style={{ color: '#c9a84c', fontWeight: 600, fontSize: '.88rem' }}>← All Articles</Link>
      </div>
    </>
  );
}