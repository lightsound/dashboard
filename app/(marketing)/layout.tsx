import { ReactNode } from "react";
import localFont from "@next/font/local";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const lineSeedJpFont = localFont({
  display: "swap",
  variable: "--font-line",
  src: [
    { path: "./font/LINESeedJP_OTF_Eb.woff2", weight: "800 900" },
    { path: "./font/LINESeedJP_OTF_Bd.woff2", weight: "500 700" },
    { path: "./font/LINESeedJP_OTF_Rg.woff2", weight: "300 400" },
    { path: "./font/LINESeedJP_OTF_Th.woff2", weight: "100 200" },
  ],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${lineSeedJpFont.className} font-sans`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
