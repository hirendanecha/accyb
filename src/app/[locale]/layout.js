import "./globals.css";
import Header from "../../Components/Header/page";
import Footer from "../../Components/Footer/page";
import { inter } from "../../fonts/fonts";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ThemeProviderWrapper from "../../fonts/ThemeProviderWrapper";
import ProviderLayout from "../provider";
import Cookie from "../[locale]/cookie";
export const metadata = {
  title: "ACCYB",
  description: "Caribbean Cybersecurity Agency (CCYBA)",
  imageurl : `https://accyb.vercel.app/Thumbnail.png`,
  websiteurl : `https://accyb.vercel.app`
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  // const imageurl = `https://accyb.vercel.app/Thumbnail.png`
  // const websiteurl = `https://accyb.vercel.app`

  return (
    <ThemeProviderWrapper>
      <html lang={locale}>
        <head>
          <meta property="og:title" content="ACCYB" />
          <meta
            property="og:description"
            content="Caribbean Cybersecurity Agency (CCYBA)"
          />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="image" content={metadata.imageurl} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={metadata.websiteurl} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content={metadata.imageurl} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metadata.imageurl} />
        <meta name="twitter:url" content={metadata.websiteurl} />
        <meta name="twitter:site" content={metadata.websiteurl} />

          <meta name="skype_toolbox" content={metadata.imageurl} />
          <meta name="skype_toolbox" content={metadata.description} />
          <meta name="skype_toolbox" content={metadata.description} />
          <meta name="skype_toolbox" content={metadata.websiteurl} />
        </head>
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

