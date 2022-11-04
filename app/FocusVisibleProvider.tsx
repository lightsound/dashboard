"use client";
import "focus-visible";
import { FC, ReactNode } from "react";

export const FocusVisibleProvider: FC<{ children: ReactNode }> = ({
  children,
}) => <>{children}</>;
