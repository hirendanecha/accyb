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
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <ThemeProviderWrapper>
      <html lang={locale}>
        <head>
          <meta property="og:title" content="ACCYB" />
          <meta
            property="og:description"
            content="Caribbean Cybersecurity Agency (CCYBA)"
          />
          <meta property="og:image" content="https://www.accyb.org/Thumbnail.svg" />
          <meta property="og:url" content="https://www.accyb.org" />
          <meta property="og:type" content="website" />
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
