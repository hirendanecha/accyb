import "./globals.css";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import FavIcon from "../../public/FavIcon.png";
import { inter } from "./fonts/fonts";

export const metadata = {
  title: "ACCYB",
  description: "Caribbean Cybersecurity Agency (CCYBA)",
  icons: {
    icon: "../../public/FavIcon.png",
  },
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
