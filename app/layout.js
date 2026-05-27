import './globals.css';
import NextAuthProvider from '@/components/ui/SessionProvider';

export const metadata = {
  title: 'ResumeForge – Free Professional Resume Builder',
  description: 'Build a stunning professional resume in minutes. Choose from Horizontal or Vertical templates, fill in your details, and download as PDF instantly. 100% free.',
  keywords: 'resume builder, free resume maker, professional resume, CV builder, resume templates, download resume PDF, online resume creator India',
  openGraph: {
    title: 'ResumeForge – Free Professional Resume Builder',
    description: 'Create a stunning resume in minutes. Free templates. Instant PDF download.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="nC_NNGnAgwPKz8yoCZlFrI29uGl9pP9eXNKLdA5BP0k" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5610584604161357"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}