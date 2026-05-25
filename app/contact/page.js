'use client';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const mailtoLink = `mailto:bokamaravind@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif' }}>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', marginBottom: '.5rem', color: '#1a1f36' }}>
          Contact Us
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2.5rem', fontSize: '.95rem' }}>
          Have a question or feedback? We'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { icon: '✉', label: 'Email', value: 'bokamaravind@gmail.com', href: 'mailto:bokamaravind@gmail.com' },
            { icon: '📍', label: 'Location', value: 'Visakhapatnam, AP, India', href: null },
            { icon: '🌐', label: 'Website', value: 'resumesforge.in', href: 'https://resumesforge.in' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>{item.icon}</div>
              <div style={{ fontSize: '.78rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '.3rem' }}>{item.label}</div>
              {item.href
                ? <a href={item.href} style={{ fontSize: '.88rem', color: '#c9a84c', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                : <div style={{ fontSize: '.88rem', color: '#374151', fontWeight: 500 }}>{item.value}</div>
              }
            </div>
          ))}
        </div>

        {!submitted ? (
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1f36', marginBottom: '1.5rem' }}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: '#374151', marginBottom: '.35rem' }}>Your Name *</label>
                  <input type="text" required placeholder="Aravind Kumar"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: 'inherit', fontSize: '.9rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: '#374151', marginBottom: '.35rem' }}>Email Address *</label>
                  <input type="email" required placeholder="you@email.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: 'inherit', fontSize: '.9rem', outline: 'none' }} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: '#374151', marginBottom: '.35rem' }}>Subject *</label>
                <input type="text" required placeholder="Question about ResumesForge"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: 'inherit', fontSize: '.9rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: '#374151', marginBottom: '.35rem' }}>Message *</label>
                <textarea required placeholder="Tell us how we can help..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: 'inherit', fontSize: '.9rem', outline: 'none', minHeight: 140, resize: 'vertical', lineHeight: 1.6 }} />
              </div>
              <button type="submit"
                style={{ width: '100%', padding: '13px', background: '#1a1f36', color: 'white', border: 'none', borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                Send Message →
              </button>
            </form>
          </div>
        ) : (
          <div style={{ background: '#dcfce7', border: '1px solid #86efac', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#15803d', marginBottom: '.5rem' }}>Message Sent!</h2>
            <p style={{ color: '#166534', fontSize: '.95rem' }}>We'll get back to you within 24–48 hours.</p>
            <button onClick={() => setSubmitted(false)}
              style={{ marginTop: '1.5rem', padding: '10px 24px', background: '#15803d', color: 'white', border: 'none', borderRadius: 8, fontFamily: 'inherit', fontWeight: 600, cursor: 'pointer' }}>
              Send Another Message
            </button>
          </div>
        )}

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', fontSize: '.88rem' }}>
          <Link href="/privacy" style={{ color: '#c9a84c', fontWeight: 600 }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#c9a84c', fontWeight: 600 }}>Terms of Service</Link>
          <Link href="/" style={{ color: '#6b7280' }}>← Back to Home</Link>
        </div>
      </div>
    </>
  );
}