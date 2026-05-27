'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Toast from '@/components/ui/Toast';

export default function DashboardPage() {
  const router = useRouter();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
  async function checkAuth() {
    const localUser = localStorage.getItem('rf_user');
    if (localUser) { fetchResumes(); return; }

    const res = await fetch('/api/auth/session');
    const session = await res.json();

    if (session?.user) {
      localStorage.setItem('rf_user', JSON.stringify({
        id: session.user.id || session.user.email,
        name: session.user.name,
        email: session.user.email,
      }));
      fetchResumes();
    } else {
      router.push('/login');
    }
  }
  checkAuth();
}, [router]);

  async function fetchResumes() {
    try {
      const res = await fetch('/api/resume/list');
      const data = await res.json();
      if (res.ok) setResumes(data.resumes || []);
    } catch {}
    setLoading(false);
  }

  async function deleteResume(id) {
    if (!confirm('Delete this resume?')) return;
    try {
      await fetch(`/api/resume/list?id=${id}`, { method: 'DELETE' });
      setResumes(prev => prev.filter(r => r._id !== id));
      setToast({ message: 'Resume deleted', type: 'default' });
    } catch {
      setToast({ message: 'Delete failed', type: 'error' });
    }
  }

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  return (
    <>
      <Navbar />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="page-wrap">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem' }}>My Resumes</h1>
            <p style={{ color: '#6b7280', fontSize: '.88rem', marginTop: '.25rem' }}>
              {resumes.length} resume{resumes.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          <Link href="/builder" className="btn btn-navy">
            + Create New Resume
          </Link>
        </div>

        <div className="ad-banner" style={{ marginBottom: '1.5rem' }}>
          <strong>Advertisement</strong>Google AdSense – 728×90 Leaderboard
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>
            <div className="spinner" style={{ borderTopColor: '#1a1f36', borderColor: '#d1d5db', margin: '0 auto' }} />
            <p style={{ marginTop: '1rem' }}>Loading your resumes...</p>
          </div>
        ) : resumes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', border: '2px dashed #e5e7eb', borderRadius: 16, background: 'white' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>No resumes yet</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '.9rem' }}>Build your first professional resume in minutes</p>
            <Link href="/builder" className="btn btn-navy btn-lg">Build My First Resume →</Link>
          </div>
        ) : (
          <div className="resume-grid">
            {resumes.map(r => (
              <div className="resume-card" key={r._id}>
                <div style={{
                  height: 90,
                  background: 'linear-gradient(135deg, #1a1f36, #252b4a)',
                  borderRadius: 8,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '.8rem',
                  color: '#c9a84c',
                  fontWeight: 600,
                  letterSpacing: '.5px',
                  textTransform: 'uppercase',
                }}>
                  {r.template} Template
                </div>
                <div className="resume-card-title">{r.title || r['personalInfo.name'] || 'Untitled Resume'}</div>
                <div className="resume-card-meta">
                  {r.template?.charAt(0).toUpperCase() + r.template?.slice(1)} · Updated {formatDate(r.updatedAt)}
                </div>
                <div className="resume-card-actions">
                  <Link href="/builder" className="btn btn-navy" style={{ flex: 1, justifyContent: 'center', fontSize: '.82rem', padding: '7px' }}>
                    ✏️ Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    style={{ flex: 1, fontSize: '.82rem', padding: '7px' }}
                    onClick={() => deleteResume(r._id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
