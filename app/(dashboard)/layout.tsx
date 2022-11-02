import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <aside>
        <nav>
          <Link href="/">ホーム</Link>
          <Link href="/pricing">料金</Link>
          <Link href="/dashboard">ログイン</Link>
        </nav>
      </aside>

      <div>{children}</div>
    </div>
  );
};
export default RootLayout;
