import "../styles/dist.css";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>Dashboard</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
