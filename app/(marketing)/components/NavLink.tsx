import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

type NavLinkProps = LinkProps & { children: ReactNode };

export const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <Link
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      {...props}
    >
      {children}
    </Link>
  );
};
