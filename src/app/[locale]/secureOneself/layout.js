export const metadata = {
  openGraph: {
    title: 'ACCYB',
    description: 'Caribbean Cybersecurity Agency (CCYBA)',
    url: 'https://accyb.vercel.app',
    // siteName: 'Next.js',
    images: [
      {
        url: 'https://accyb.vercel.app/Thumbnail1.svg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    // locale: 'en_US',
    type: 'website',
  },
};
  
export default function RootLayout({ children }) {
  return children;
}
