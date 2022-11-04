"use client";
import { FC, ReactNode } from "react";
import { Text, Title } from "@tremor/react";

type PageShellProps = {
  title: string;
  text: string;
  children: ReactNode;
};

export const PageShell: FC<PageShellProps> = ({ title, text, children }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <Title>{title}</Title>
      <Text>{text}</Text>
      <div className="mt-6">{children}</div>
    </div>
  );
};
