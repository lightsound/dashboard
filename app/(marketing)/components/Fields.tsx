import clsx from "clsx";
import { ComponentProps, FC, ReactNode } from "react";

const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";

const Label: FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
};

type TextFieldProps = ComponentProps<"input"> & {
  id: string;
  label: ReactNode;
};

export const TextField: FC<TextFieldProps> = ({
  id,
  label,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
};

type SelectFieldProps = ComponentProps<"select"> & {
  id: string;
  label: ReactNode;
};

export const SelectField: FC<SelectFieldProps> = ({
  id,
  label,
  className = "",
  ...props
}) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
    </div>
  );
};
