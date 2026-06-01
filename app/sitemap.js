export default function sitemap() {
  return [
    { url: 'https://resumesforge.in', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://resumesforge.in/login', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://resumesforge.in/signup', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://resumesforge.in/builder', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://resumesforge.in/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://resumesforge.in/blog/how-to-write-resume-freshers-india-2026', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://resumesforge.in/blog/top-10-ats-resume-tips', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://resumesforge.in/blog/how-to-get-first-job-india', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://resumesforge.in/privacy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://resumesforge.in/terms', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://resumesforge.in/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://resumesforge.in/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}