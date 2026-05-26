'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('rf_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('rf_user');
    setUser(null);
    router.push('/');
  }

  function initials(name) {
    return (name || 'U')
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  return (
    <nav className="nav">
      <Link href="/" className="logo">
        Resume<span>Forge</span>
      </Link>
      <div className="nav-links">
        <Link href="/blog" className="btn btn-outline" style={{ padding: '7px 16px', fontSize: '.82rem' }}>
          Blog
        </Link>
        {user ? (
          <>

            <Link href="/dashboard" className="btn btn-outline" style={{ fontSize: '.82rem', padding: '7px 16px' }}>
              My Resumes
            </Link>
            <button onClick={logout} className="btn btn-outline" style={{ fontSize: '.82rem', padding: '7px 16px' }}>
              Log Out
            </button>
            <div className="avatar">{initials(user.name)}</div>
            <span style={{ color: '#c9a84c', fontSize: '.88rem', fontWeight: 500 }}>
              {user.name.split(' ')[0]}
            </span>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline" style={{ padding: '7px 18px' }}>
              Log In
            </Link>
            <Link href="/signup" className="btn btn-gold" style={{ padding: '7px 18px' }}>
              Sign Up Free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
