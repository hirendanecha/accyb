import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";
import FavIcon from "../../public/FavIcon.png";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "ACCYB",
  description: "Caribbean Cybersecurity Agency (CCYBA)",
  icons: {
    icon: `${FavIcon}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
