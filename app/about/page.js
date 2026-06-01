import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'About Us – ResumesForge',
  description: 'Learn about ResumesForge — a free AI-powered resume builder built for Indian job seekers. Our mission is to help every fresher and professional land their dream job.',
  keywords: 'about resumesforge, free resume builder india, AI resume builder, who made resumesforge',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', lineHeight: 1.8 }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 700, color: '#1a1f36', marginBottom: '1rem', lineHeight: 1.2 }}>
            About <span style={{ color: '#c9a84c' }}>ResumesForge</span>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>
            Helping Indian job seekers build professional resumes — completely free.
          </p>
        </div>

        {/* Mission */}
        <div style={{ background: 'linear-gradient(135deg, #1a1f36, #252b4a)', borderRadius: 16, padding: '2.5rem', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '1rem', color: '#c9a84c' }}>Our Mission</div>
          <p style={{ fontSize: '1rem', color: '#a5b4c8', lineHeight: 1.8, maxWidth: 580, margin: '0 auto' }}>
            Every job seeker in India deserves a professional resume — regardless of their background or budget.
            ResumesForge makes it possible to build an ATS-friendly, recruiter-approved resume in minutes, for free.
          </p>
        </div>

        {/* Story */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1a1f36', marginBottom: '1rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
            Our Story
          </h2>
          <p style={{ fontSize: '.95rem', color: '#374151', marginBottom: '1rem' }}>
            ResumesForge was built by <strong>Aravind Bokam</strong>, a final-year B.Tech Computer Science student at GIITS, Visakhapatnam, Andhra Pradesh. As a fresher navigating the Indian job market, Aravind understood firsthand how difficult it is to create a professional resume without expensive tools or design skills.
          </p>
          <p style={{ fontSize: '.95rem', color: '#374151', marginBottom: '1rem' }}>
            Most resume builders either charge money, add watermarks, or produce generic-looking resumes that don't pass ATS systems. ResumesForge was built to solve all three problems — professional templates, AI-powered content suggestions, ATS scoring, and 100% free PDF download.
          </p>
          <p style={{ fontSize: '.95rem', color: '#374151' }}>
            Built with Next.js, MongoDB, and Groq AI, ResumesForge is designed specifically for the Indian job market — targeting freshers, diploma holders, B.Tech graduates, and working professionals looking to upgrade their careers.
          </p>
        </div>

        {/* What We Offer */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1a1f36', marginBottom: '1.25rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
            What We Offer
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🎨', title: '4 Professional Templates', desc: 'Horizontal, Vertical, Classic, and Modern — all ATS-friendly' },
              { icon: '🤖', title: 'AI Content Suggestions', desc: 'AI writes your summary, experience bullets, and project descriptions' },
              { icon: '🎯', title: 'ATS Score Checker', desc: 'See how your resume scores against applicant tracking systems' },
              { icon: '📄', title: 'Free PDF Download', desc: 'Download your resume as a professional PDF — no watermarks' },
              { icon: '💾', title: 'Save & Edit Anytime', desc: 'Save multiple resumes and edit them whenever you need' },
              { icon: '🔒', title: 'Secure & Private', desc: 'Your data is encrypted and never shared with third parties' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '.5rem' }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '.95rem', color: '#1a1f36', marginBottom: '.3rem' }}>{item.title}</div>
                <div style={{ fontSize: '.82rem', color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1a1f36', marginBottom: '1rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
            Built With
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
            {['Next.js 15', 'React', 'Node.js', 'MongoDB Atlas', 'Groq AI', 'Vercel', 'JWT Auth', 'Google OAuth', 'jsPDF', 'html2canvas'].map((tech, i) => (
              <span key={i} style={{ background: '#1a1f36', color: '#c9a84c', padding: '5px 14px', borderRadius: 20, fontSize: '.82rem', fontWeight: 600 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Who is it for */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1a1f36', marginBottom: '1rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
            Who Is ResumesForge For?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.75rem' }}>
            {[
              '🎓 B.Tech / B.E. Freshers',
              '📚 Diploma Graduates',
              '💼 Working Professionals',
              '🔄 Career Switchers',
              '🏢 MBA Graduates',
              '💻 IT & Tech Professionals',
              '🏦 Banking Job Seekers',
              '🏥 Healthcare Professionals',
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8f9fa', border: '1px solid #e5e7eb', borderRadius: 10, padding: '.85rem 1rem', fontSize: '.88rem', color: '#374151', fontWeight: 500 }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1a1f36', marginBottom: '1rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
            Contact Us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { label: 'Email', value: 'bokamaravind@gmail.com', href: 'mailto:bokamaravind@gmail.com' },
              { label: 'Website', value: 'resumesforge.in', href: 'https://resumesforge.in' },
              { label: 'Location', value: 'Visakhapatnam, AP, India', href: null },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: '1rem' }}>
                <div style={{ fontSize: '.75rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '.3rem' }}>{item.label}</div>
                {item.href
                  ? <a href={item.href} style={{ fontSize: '.9rem', color: '#c9a84c', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                  : <div style={{ fontSize: '.9rem', color: '#374151', fontWeight: 500 }}>{item.value}</div>
                }
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a1f36, #252b4a)', borderRadius: 16, padding: '2.5rem', textAlign: 'center', color: 'white', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '.75rem' }}>
            Ready to Build Your Resume?
          </div>
          <p style={{ color: '#a5b4c8', marginBottom: '1.5rem', fontSize: '.95rem' }}>
            Join thousands of Indian job seekers who built their resume with ResumesForge.
          </p>
          <Link href="/signup" style={{ background: '#c9a84c', color: '#1a1f36', padding: '13px 36px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            Build My Resume Free →
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '.88rem', flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ color: '#c9a84c', fontWeight: 600 }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#c9a84c', fontWeight: 600 }}>Terms of Service</Link>
          <Link href="/contact" style={{ color: '#c9a84c', fontWeight: 600 }}>Contact Us</Link>
          <Link href="/" style={{ color: '#6b7280' }}>← Back to Home</Link>
        </div>
      </div>
    </>
  );
}