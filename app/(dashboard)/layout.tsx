import "@tremor/react/dist/esm/tremor.css";
import { ReactNode } from "react";
import { AppShell, MenuBar } from "./components";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AppShell menuBar={<MenuBar />}>{children}</AppShell>;
};

export default Layout;
