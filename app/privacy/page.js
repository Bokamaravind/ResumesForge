import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy – ResumesForge',
  description: 'Privacy Policy for ResumesForge. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', lineHeight: 1.8 }}>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', marginBottom: '.5rem', color: '#1a1f36' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '.9rem' }}>
          Last updated: May 24, 2026
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to <strong>ResumesForge</strong> ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit <strong>resumesforge.in</strong>.
        </p>

        {[
          {
            title: '1. Information We Collect',
            content: `We collect information you provide directly to us when you:\n• Create an account (name, email address, password)\n• Build a resume (personal details, work experience, education, skills, projects)\n• Contact us through our contact form\n\nWe do NOT collect payment information — we do not sell paid services currently.`,
          },
          {
            title: '2. How We Use Your Information',
            content: `We use the information we collect to:\n• Create and manage your account\n• Save and retrieve your resume data\n• Improve our services and user experience\n• Send important service-related emails\n• Respond to your inquiries\n\nWe do NOT sell your personal information to any third parties.`,
          },
          {
            title: '3. Google AdSense & Cookies',
            content: `We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites.\n\nYou may opt out of personalized advertising by visiting: https://www.google.com/settings/ads\n\nWe also use essential cookies to keep you logged in to your account. By using our website, you consent to our use of cookies.`,
          },
          {
            title: '4. Data Storage & Security',
            content: `Your resume data is stored securely in MongoDB Atlas cloud database. Your password is encrypted using bcrypt hashing and is never stored in plain text.\n\nWe implement appropriate security measures to protect your personal information against unauthorized access.`,
          },
          {
            title: '5. Third-Party Services',
            content: `We use the following third-party services:\n• MongoDB Atlas — for secure data storage\n• Vercel — for website hosting\n• Google AdSense — for displaying advertisements\n• Groq AI — for AI-powered resume suggestions`,
          },
          {
            title: '6. Data Retention',
            content: `We retain your account and resume data for as long as your account is active. You can delete your account and all associated data at any time by contacting us at bokamaravind@gmail.com.`,
          },
          {
            title: '7. Children\'s Privacy',
            content: `Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.`,
          },
          {
            title: '8. Your Rights',
            content: `You have the right to:\n• Access the personal information we hold about you\n• Correct inaccurate personal information\n• Request deletion of your personal information\n\nTo exercise these rights, contact us at bokamaravind@gmail.com.`,
          },
          {
            title: '9. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page and updating the "Last updated" date.`,
          },
          {
            title: '10. Contact Us',
            content: `If you have questions about this Privacy Policy:\n\nEmail: bokamaravind@gmail.com\nWebsite: resumesforge.in\nLocation: Visakhapatnam, Andhra Pradesh, India`,
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1a1f36', marginBottom: '.75rem', paddingBottom: '.5rem', borderBottom: '2px solid #c9a84c' }}>
              {section.title}
            </h2>
            <p style={{ fontSize: '.95rem', color: '#374151', whiteSpace: 'pre-line' }}>
              {section.content}
            </p>
          </div>
        ))}

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: 10, border: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '.88rem', color: '#6b7280', margin: 0 }}>
            By using ResumesForge, you agree to this Privacy Policy.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', fontSize: '.88rem' }}>
          <Link href="/terms" style={{ color: '#c9a84c', fontWeight: 600 }}>Terms of Service</Link>
          <Link href="/contact" style={{ color: '#c9a84c', fontWeight: 600 }}>Contact Us</Link>
          <Link href="/" style={{ color: '#6b7280' }}>← Back to Home</Link>
        </div>
      </div>
    </>
  );
}