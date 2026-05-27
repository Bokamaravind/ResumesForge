'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Navbar from '@/components/ui/Navbar';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (form.password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); setLoading(false); return; }
      localStorage.setItem('rf_user', JSON.stringify(data.user));
      router.push('/builder');
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  async function handleGoogleSignup() {
    setGoogleLoading(true);
    try {
      await signIn('google', { callbackUrl: '/builder' });
    } catch {
      setError('Google sign up failed.');
      setGoogleLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Create account</h1>
          <p>Build and download your professional resume — free forever</p>

          {error && <div className="error-msg">{error}</div>}

          {/* Google Signup Button */}
          <button onClick={handleGoogleSignup} disabled={googleLoading}
            style={{ width: '100%', padding: '11px', background: 'white', border: '1.5px solid #e5e7eb', borderRadius: 8, fontFamily: 'inherit', fontSize: '.95rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.75rem', marginBottom: '1rem', transition: '.2s' }}>
            {googleLoading ? (
              <span className="spinner" style={{ borderTopColor: '#1a1f36', borderColor: '#d1d5db' }} />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            {googleLoading ? 'Creating account...' : 'Continue with Google'}
          </button>

          <div className="auth-divider">or sign up with email</div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Aravind Kumar"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Min. 6 characters"
                value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
            </div>
            <button type="submit" className="btn btn-navy btn-full" disabled={loading}>
              {loading ? <span className="spinner" /> : 'Create Free Account'}
            </button>
          </form>

          <p style={{ fontSize: '.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '.75rem' }}>
            By signing up you agree to our Terms of Service & Privacy Policy.
          </p>

          <div className="auth-switch">
            Already have an account? <Link href="/login">Log in →</Link>
          </div>
        </div>
      </div>
    </>
  );
}