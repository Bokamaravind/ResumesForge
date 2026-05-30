'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      const stored = localStorage.getItem('rf_user');
      if (stored) { setUser(JSON.parse(stored)); return; }
      const res = await fetch('/api/auth/session');
      const session = await res.json();
      if (session?.user) {
        const userData = { id: session.user.id || session.user.email, name: session.user.name, email: session.user.email };
        localStorage.setItem('rf_user', JSON.stringify(userData));
        setUser(userData);
      }
    }
    loadUser();
  }, []);

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    try {
      const { signOut } = await import('next-auth/react');
      await signOut({ redirect: false });
    } catch {}
    localStorage.removeItem('rf_user');
    setUser(null);
    router.push('/');
  }

  function initials(name) {
    return (name || 'U').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  }

  return (
    <>
      <nav className="nav" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" className="logo">Resume<span>Forge</span></Link>

        {/* Desktop nav */}
        <div className="nav-links nav-desktop">
          <Link href="/blog" className="btn btn-outline" style={{ fontSize: '.82rem', padding: '7px 14px' }}>Blog</Link>
          {user ? (
            <>
              <div className="avatar">{initials(user.name)}</div>
              <span style={{ color: '#c9a84c', fontSize: '.88rem', fontWeight: 500 }}>{user.name.split(' ')[0]}</span>
              <Link href="/dashboard" className="btn btn-outline" style={{ fontSize: '.82rem', padding: '7px 14px' }}>My Resumes</Link>
              <button onClick={logout} className="btn btn-outline" style={{ fontSize: '.82rem', padding: '7px 14px' }}>Log Out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-outline" style={{ padding: '7px 16px' }}>Log In</Link>
              <Link href="/signup" className="btn btn-gold" style={{ padding: '7px 16px' }}>Sign Up Free</Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none' }}>
          <div style={{ width: 22, height: 2, background: 'white', marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 22, height: 2, background: 'white', marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 22, height: 2, background: 'white', borderRadius: 2 }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ background: '#1a1f36', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '.5rem', borderBottom: '1px solid rgba(255,255,255,.1)', zIndex: 99, position: 'sticky', top: 62 }}>
          <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ color: '#c9a84c', fontSize: '.9rem', fontWeight: 600, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>Blog</Link>
          {user ? (
            <>
              <span style={{ color: 'white', fontSize: '.9rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>👤 {user.name}</span>
              <Link href="/dashboard" onClick={() => setMenuOpen(false)} style={{ color: 'white', fontSize: '.9rem', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>My Resumes</Link>
              <button onClick={() => { logout(); setMenuOpen(false); }} style={{ background: 'none', border: '1px solid rgba(255,255,255,.3)', color: 'white', padding: '8px', borderRadius: 6, fontFamily: 'inherit', cursor: 'pointer', textAlign: 'left' }}>Log Out</button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)} style={{ color: 'white', fontSize: '.9rem', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>Log In</Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} style={{ color: '#c9a84c', fontSize: '.9rem', fontWeight: 600, textDecoration: 'none', padding: '8px 0' }}>Sign Up Free</Link>
            </>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
