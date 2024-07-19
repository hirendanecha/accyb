

export async function generateMetadata({ children }) {
  return {
    title: "ACCYB",
    description: "Caribbean Cybersecurity Agency (CCYBA)",
    imageurl: `https://accyb.vercel.app/Thumbnail1.png`,
    websiteurl: `https://accyb.vercel.app`,
  };
}

  
export default function RootLayout({ children }) {
  return children;
}
