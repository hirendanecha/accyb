import "./globals.css";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import { inter } from "./fonts/fonts";

export const metadata = {
  title: "ACCYB",
  description: "Caribbean Cybersecurity Agency (CCYBA)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
