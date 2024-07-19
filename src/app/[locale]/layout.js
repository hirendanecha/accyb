import "./globals.css";
import Header from "../../Components/Header/page";
import Footer from "../../Components/Footer/page";
import { inter } from "../../fonts/fonts";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ThemeProviderWrapper from "../../fonts/ThemeProviderWrapper";
import ProviderLayout from "../provider";
import Cookie from "../[locale]/cookie";
export const metadata = {
  openGraph: {
    title: 'ACCYB',
    description: 'Caribbean Cybersecurity Agency (CCYBA)',
    url: 'https://accyb.vercel.app',
    // siteName: 'Next.js',
    images: [
      {
        url: 'https://accyb.vercel.app/Thumbnail.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    // locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  // const imageurl = `https://accyb.vercel.app/Thumbnail.png`
  // const websiteurl = `https://accyb.vercel.app`

  return (
    <ThemeProviderWrapper>
      <html lang={locale}>
        
        <body className={inter.className}>
          <ProviderLayout>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Header />
              {children}
              <Footer />
              <Cookie />
            </NextIntlClientProvider>
          </ProviderLayout>
        </body>
      </html>
    </ThemeProviderWrapper>
  );
}

