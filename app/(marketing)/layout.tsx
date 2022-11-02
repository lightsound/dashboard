import { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
