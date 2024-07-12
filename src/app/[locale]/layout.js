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
  imageurl : `https://accyb.vercel.app/Thumbnail.svg`,
  websiteurl : `https://accyb.vercel.app`
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  // const imageurl = `https://accyb.vercel.app/Thumbnail.svg`
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
          <meta property="og:image" content='imageurl' />
          <meta property="og:url" content='websiteurl' />
          <meta property="og:type" content="website" />

          <meta name="skype_toolbox" content='imageurl' />
          <meta name="skype_toolbox" content="title" />
          <meta name="skype_toolbox" content="description" />
          <meta name="skype_toolbox" content='websiteurl' />
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
