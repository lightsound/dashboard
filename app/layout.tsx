import "tailwindcss/tailwind.css";
import { ReactNode } from "react";
import { FocusVisibleProvider } from "./FocusVisibleProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <title>Dashboard</title>
      </head>
      <body className="min-h-screen bg-slate-50">
        <FocusVisibleProvider>{children}</FocusVisibleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
