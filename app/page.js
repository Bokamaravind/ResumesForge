"use client";
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  // For client-side localStorage access
  const handleBuildResume = () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('rf_user');
      if (user) {
        router.push('/builder');
      } else {
        router.push('/signup');
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* Ad Banner Top */}
      <div style={{ padding: '.75rem 2rem', background: '#f9f9f7' }}>
        <div className="ad-banner" style={{ maxWidth: 728, margin: '0 auto' }}>
          <strong>Advertisement</strong>
          Google AdSense – 728×90 Leaderboard
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <h1>
          Build a <em>Professional Resume</em>
          <br />in Minutes — Free
        </h1>
        <p>
          Choose a template, fill in your details, and download your polished resume as a PDF.
          No watermarks. No credit card. Just results.
        </p>
        <div className="hero-btns">
          <button className="btn btn-gold btn-lg" onClick={handleBuildResume}>
            Build My Resume →
          </button>
          <Link href="/login" className="btn btn-outline btn-lg">
            Sign In
          </Link>
          <Link href="/blog" className="btn btn-outline btn-lg">
            Career Tips
          </Link>
        </div>
      </section>

      {/* Steps */}
      <div className="steps-row">
        {[
          { n: 1, h: 'Create Account', p: 'Free sign up — takes 30 seconds' },
          { n: 2, h: 'Pick a Template', p: 'Horizontal or Vertical, both ATS-friendly' },
          { n: 3, h: 'Fill Your Details', p: 'Experience, education, skills — live preview' },
          { n: 4, h: 'Download PDF', p: 'One click, professionally formatted' },
        ].map(s => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
          </div>
        ))}
      </div>

      {/* Ad Rectangle */}
      <div style={{ padding: '1rem 2rem 2.5rem', display: 'flex', justifyContent: 'center' }}>
        <div className="ad-banner" style={{ width: 300 }}>
          <strong>Advertisement</strong>
          Google AdSense – 300×250 Rectangle
        </div>
      </div>

      {/* Features */}
      <section style={{ background: 'white', padding: '3.5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 className="section-title">Why ResumeForge?</h2>
          <p className="section-sub">Everything you need to land your next job</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⚡', title: 'Instant PDF Download', desc: 'Download your resume as a print-ready PDF in one click.' },
              { icon: '👁️', title: 'Live Preview', desc: 'See your resume update in real-time as you type.' },
              { icon: '💾', title: 'Save & Edit Anytime', desc: 'All resumes saved to your account — edit whenever.' },
              { icon: '🎨', title: '2 Pro Templates', desc: 'Horizontal and Vertical layouts, both ATS-optimised.' },
              { icon: '📱', title: 'Mobile Friendly', desc: 'Build on any device — phone, tablet, or desktop.' },
              { icon: '🔒', title: '100% Secure', desc: 'Your data is encrypted and never shared.' },
            ].map(f => (
              <div key={f.title} style={{ padding: '1.25rem', border: '1px solid #e5e7eb', borderRadius: 12 }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '.95rem', fontWeight: 600, marginBottom: '.3rem' }}>{f.title}</h3>
                <p style={{ fontSize: '.82rem', color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(140deg, #1a1f36, #252b4a)' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
          Ready to build your resume?
        </h2>
        <p style={{ color: '#a5b4c8', marginBottom: '2rem' }}>Join thousands who've landed jobs with ResumeForge</p>
        <Link href="/signup" className="btn btn-gold btn-lg">Get Started — It's Free</Link>
      </section>

      {/* SEO Blog Teaser */}
      <section style={{ padding: '3rem 2rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Resume Tips & Career Advice</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
          {[
            { title: 'How to Write a Professional Resume in 2026', slug: '/blog/how-to-write-resume-freshers-india-2026' },
            { title: 'Top 10 Resume Mistakes That Cost You the Job', slug: '/blog/top-10-ats-resume-tips' },
            { title: 'ATS-Friendly Resume: The Complete Guide', slug: '/blog/ats-friendly-resume-the-complete-guide' },
          ].map(p => (
            <a key={p.title} href={p.slug} style={{ display: 'block', padding: '1.1rem', border: '1px solid #e5e7eb', borderRadius: 10, textDecoration: 'none', color: 'inherit', transition: '.2s' }}

            >
              <div style={{ fontSize: '.72rem', color: '#c9a84c', fontWeight: 600, marginBottom: '.4rem', textTransform: 'uppercase', letterSpacing: '.5px' }}>Career Tips</div>
              <h3 style={{ fontSize: '.92rem', fontWeight: 600, lineHeight: 1.4 }}>{p.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1f36', color: '#8a9bb0', padding: '2rem', textAlign: 'center', fontSize: '.82rem' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", color: '#c9a84c', fontSize: '1.2rem', marginBottom: '.5rem' }}>
          Resume<span style={{ color: 'white' }}>Forge</span>
        </div>
        <p>© {new Date().getFullYear()} ResumeForge. Free professional resume builder.</p>
        <div style={{ marginTop: '.75rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="/privacy" style={{ color: '#8a9bb0', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#8a9bb0', textDecoration: 'none' }}>Terms of Service</a>
          <a href="/contact" style={{ color: '#8a9bb0', textDecoration: 'none' }}>Contact</a>
          <a href="/blog" style={{ color: '#8a9bb0', textDecoration: 'none' }}>Blog</a>
        </div>
      </footer>
    </>
  );
}
