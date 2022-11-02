import clsx from "clsx";
import { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
};
