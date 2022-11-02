import "tailwindcss/tailwind.css";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <title>Dashboard</title>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
