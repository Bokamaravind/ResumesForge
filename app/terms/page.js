import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service – ResumesForge',
  description: 'Terms of Service for ResumesForge. Read our terms before using our free resume builder.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', lineHeight: 1.8 }}>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', marginBottom: '.5rem', color: '#1a1f36' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '.9rem' }}>
          Last updated: May 24, 2026
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Please read these Terms carefully before using <strong>resumesforge.in</strong>. By accessing or using our service, you agree to be bound by these Terms.
        </p>

        {[
          {
            title: '1. Acceptance of Terms',
            content: `By creating an account and using ResumesForge, you confirm that you are at least 13 years of age and agree to these Terms of Service and our Privacy Policy.`,
          },
          {
            title: '2. Description of Service',
            content: `ResumesForge is a free online resume builder that allows users to:\n• Create professional resumes using our templates\n• Fill in personal, professional, and educational information\n• Download resumes as PDF files\n• Save and edit multiple resumes\n• Use AI-powered suggestions for resume content\n• Check ATS compatibility scores`,
          },
          {
            title: '3. User Accounts',
            content: `To use ResumesForge, you must create an account. You are responsible for:\n• Maintaining the confidentiality of your account credentials\n• All activities that occur under your account\n• Providing accurate and up-to-date information\n• Notifying us of any unauthorized use of your account`,
          },
          {
            title: '4. User Content',
            content: `You retain ownership of all content you create using ResumesForge. By using our service, you grant us a limited license to store and process your content solely for the purpose of providing the service.\n\nYou are solely responsible for the accuracy and legality of information in your resumes.`,
          },
          {
            title: '5. Acceptable Use',
            content: `You agree NOT to use ResumesForge to:\n• Upload false, misleading, or fraudulent information\n• Impersonate any person or entity\n• Violate any applicable laws or regulations\n• Attempt to gain unauthorized access to our systems\n• Use automated tools to scrape data from our service`,
          },
          {
            title: '6. Advertising',
            content: `ResumesForge displays advertisements through Google AdSense to support our free service. By using our service, you acknowledge that advertisements may be displayed on various pages of our website.`,
          },
          {
            title: '7. AI-Generated Content',
            content: `ResumesForge uses AI to generate resume suggestions. AI-generated content is provided as a suggestion only. You are responsible for reviewing and editing all AI-generated content before use.`,
          },
          {
            title: '8. Intellectual Property',
            content: `The ResumesForge website, including its design, logo, and templates, is owned by ResumesForge. Your resume content remains your intellectual property.`,
          },
          {
            title: '9. Disclaimer of Warranties',
            content: `ResumesForge is provided "as is" without any warranties of any kind. We do not warrant that the service will be uninterrupted, error-free, or that results will be accurate. Use of our service is at your own risk.`,
          },
          {
            title: '10. Limitation of Liability',
            content: `To the maximum extent permitted by law, ResumesForge shall not be liable for any indirect, incidental, or consequential damages arising from your use of our service.`,
          },
          {
            title: '11. Governing Law',
            content: `These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Visakhapatnam, Andhra Pradesh, India.`,
          },
          {
            title: '12. Contact Us',
            content: `If you have questions about these Terms:\n\nEmail: bokamaravind@gmail.com\nWebsite: resumesforge.in\nLocation: Visakhapatnam, Andhra Pradesh, India`,
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
            By using ResumesForge, you acknowledge that you have read and agree to these Terms of Service.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', fontSize: '.88rem' }}>
          <Link href="/privacy" style={{ color: '#c9a84c', fontWeight: 600 }}>Privacy Policy</Link>
          <Link href="/contact" style={{ color: '#c9a84c', fontWeight: 600 }}>Contact Us</Link>
          <Link href="/" style={{ color: '#6b7280' }}>← Back to Home</Link>
        </div>
      </div>
    </>
  );
}