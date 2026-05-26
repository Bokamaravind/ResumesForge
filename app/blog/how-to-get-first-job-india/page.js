import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'How to Get Your First Job in India 2026 – ResumesForge',
  description: 'Complete guide for fresh graduates on how to get their first job in India in 2026.',
  keywords: 'how to get first job india 2026, fresher job search india, first job india, job search tips freshers',
};

const sections = [
  { title: '1. Build a Job-Ready Profile First', content: `Before applying anywhere, make sure your profile is ready.\n\nChecklist:\n✅ Professional resume (use ResumesForge — free!)\n✅ LinkedIn profile — complete with photo, bio, skills, projects\n✅ GitHub profile — pin your best 3-4 projects\n✅ Portfolio website — even a simple one impresses recruiters\n✅ Professional email — firstname.lastname@gmail.com\n\nLinkedIn tips:\n• Add a professional headshot\n• Write a strong headline: "B.Tech CSE Graduate | Full Stack Developer | React.js | Node.js"\n• Connect with 500+ people — alumni, seniors, recruiters\n• Post about your projects and learning` },
  { title: '2. Where to Find Jobs in India', content: `Best portals for freshers:\n\nFor IT/Tech:\n• LinkedIn Jobs — best for startups and MNCs\n• Naukri.com — largest Indian job portal\n• Internshala — internships and fresher jobs\n• HackerEarth / HackerRank Jobs — tech-focused\n• AngelList (Wellfound) — startup jobs\n\nFor campus placements:\n• Your college placement cell — register early\n• AMCAT — campus hiring platform\n• TCS NQT, Infosys InfyTQ — direct company portals\n\nPro tip: Apply on company websites directly too — many freshers skip this!` },
  { title: '3. Apply Smart — Numbers Game', content: `Most freshers make one of two mistakes:\n1. Apply to only 5-10 companies and wait\n2. Apply to 500 companies with the same generic resume\n\nThe right approach:\nWeek 1: Build your profile (resume, LinkedIn, GitHub)\nWeek 2-4: Apply to 10-15 jobs per day\nWeek 3+: Follow up + keep applying\n\nHow to apply smart:\n• Tailor your resume for each role (10 min with ResumesForge AI)\n• Apply within 24 hours of posting\n• Track applications in a spreadsheet\n\nExpect 5-10% callback rate. 200 applications = 10-20 calls. That's normal.` },
  { title: '4. How to Prepare for Technical Interviews', content: `Indian tech companies follow this process:\n\nRound 1: Online Coding Test\n• Practice on HackerRank, LeetCode, GeeksforGeeks\n• Focus on: Arrays, Strings, Sorting, Data Structures\n\nRound 2: Technical Interview\n• DSA questions (medium level)\n• Core CS: OS, DBMS, Networking, OOPs\n• Questions about YOUR projects (know every line!)\n\nRound 3: HR Interview\n• "Tell me about yourself" — prepare a 2-minute answer\n• "Why this company?" — research the company\n• Salary discussion\n\nMost important: Know your projects inside out.` },
  { title: '5. "Tell Me About Yourself" — Perfect Answer', content: `Use this structure:\n\n"I am [Name], a [Degree] graduate from [College] with CGPA of [X]. I specialize in [tech stack] and have built [key projects].\n\nMost recently, I [best project/internship]. Through this, I [what you learned].\n\nI'm interested in [company] because [specific reason]. I'm looking to [what you contribute]."\n\nExample:\n"I am Aravind Bokam, a B.Tech CSE graduate from GIITS with CGPA 8.2. I specialize in full-stack development using React.js, Node.js, and MongoDB. I recently built ResumesForge, an AI-powered resume builder live at resumesforge.in. I'm interested in this role because of your focus on scalable products."\n\nPractice this out loud 10 times before your interview.` },
  { title: '6. Salary Expectations for Freshers 2026', content: `Service Companies (TCS, Infosys, Wipro):\n• Package: ₹3.5 – 7 LPA\n• Slow but stable growth\n\nProduct/Startups:\n• Package: ₹5 – 15 LPA\n• Fast growth with performance\n\nHow to negotiate:\n1. Never give a number first\n2. Ask: "What is the budgeted range for this role?"\n3. Freshers: Getting in is priority — don't negotiate aggressively\n4. Get the offer letter before resigning from anything\n\nFor Vizag/AP:\n• ₹3-5 LPA is reasonable for first job\n• ₹6-10 LPA is excellent\n• Remote jobs pay more — target those` },
  { title: '7. Networking — The Secret Weapon', content: `60-70% of jobs in India are filled through referrals.\n\nHow to network as a fresher:\n\nLinkedIn message template:\n"Hi [Name], I'm Aravind, a 2026 CSE graduate from GIITS. I noticed you work at [Company]. I'm interested in opportunities there and would love to know more about your experience. Would you have 15 minutes for a quick call?"\n\nMost people will help — they were freshers once too.\n\nBuild in public:\n• Share your projects on LinkedIn\n• Write about what you're learning\n• Comment on industry news\n\nReferrals get 3-5x higher interview conversion rates.` },
  { title: '8. What to Do If Not Getting Calls', content: `Diagnostic checklist:\n\nResume issues (most common):\n□ Is your resume ATS-friendly? (Check on ResumesForge)\n□ Are you using right keywords?\n□ Do your projects show real results?\n□ Is CGPA below 6.0? (Many companies filter this)\n\nSkills issues:\n□ Do your skills match market demand?\n□ Are projects live on GitHub?\n□ Any certifications? (NxtWave, Coursera)\n\nAction plan if stuck:\n1. Check ATS score (free on ResumesForge)\n2. Build 1 more strong project\n3. Get an internship (even unpaid)\n4. Reach out to 5 alumni for referrals\n\nDon't give up — opportunities exist for skilled developers!` },
];

export default function FirstJobPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', lineHeight: 1.8 }}>

        <div style={{ fontSize: '.82rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>{' → '}
          <Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</Link>{' → '}
          <span>First Job Guide</span>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <span style={{ background: '#1a1f36', color: '#c9a84c', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>Career Advice</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#1a1f36', margin: '1rem 0 .75rem', lineHeight: 1.25 }}>
            How to Get Your First Job in India: Complete 2026 Guide
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#6b7280', fontSize: '.85rem', flexWrap: 'wrap' }}>
            <span>📅 May 25, 2026</span><span>⏱ 10 min read</span><span>✍ ResumesForge Team</span>
          </div>
        </div>

        <div style={{ background: '#f0f0ec', border: '1px dashed #d1d5db', textAlign: 'center', padding: '12px', borderRadius: 6, marginBottom: '2rem', fontSize: '.72rem', color: '#9ca3af' }}>
          <strong style={{ display: 'block', fontSize: '.65rem', letterSpacing: 1, textTransform: 'uppercase', color: '#d1d5db' }}>Advertisement</strong>
          Google AdSense – 728×90 Leaderboard
        </div>

        <p style={{ fontSize: '1.05rem', color: '#374151', marginBottom: '2.5rem' }}>
          Getting your first job in India as a fresh graduate is one of the most challenging experiences of your career. With lakhs of graduates entering the job market every year, you need the right strategy. This complete guide covers everything from building your profile to negotiating your first salary.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { stat: '15 Lakh+', label: 'Engineering graduates per year' },
            { stat: '60-70%', label: 'Jobs filled through referrals' },
            { stat: '75%', label: 'Resumes rejected by ATS' },
            { stat: '5-10%', label: 'Average callback rate' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#c9a84c', fontWeight: 700, marginBottom: '.25rem' }}>{item.stat}</div>
              <div style={{ fontSize: '.78rem', color: '#6b7280', lineHeight: 1.4 }}>{item.label}</div>
            </div>
          ))}
        </div>

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
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '.75rem' }}>Start With a Great Resume — Free!</h3>
          <p style={{ color: '#a5b4c8', marginBottom: '1.5rem', fontSize: '.9rem' }}>Build an ATS-optimized resume with AI suggestions. Download as PDF instantly.</p>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#1a1f36', padding: '12px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
            Build My Resume Free →
          </Link>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1a1f36', marginBottom: '1rem' }}>Related Articles</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/blog/how-to-write-resume-freshers-india-2026" style={{ display: 'block', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#1a1f36', fontWeight: 600, fontSize: '.9rem' }}>📝 How to Write a Fresher Resume →</Link>
            <Link href="/blog/top-10-ats-resume-tips" style={{ display: 'block', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: '#1a1f36', fontWeight: 600, fontSize: '.9rem' }}>🎯 Top 10 ATS Resume Tips →</Link>
          </div>
        </div>

        <Link href="/blog" style={{ color: '#c9a84c', fontWeight: 600, fontSize: '.88rem' }}>← All Articles</Link>
      </div>
    </>
  );
}