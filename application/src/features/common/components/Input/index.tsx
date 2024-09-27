import { HTMLInputTypeAttribute } from "react";
import { Input as ShadcnInput } from "@/src/shadcn-ui/input";

type Props<T extends Record<string, any>> = {
  name: keyof T;
  defaultValue?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  maxLength?: number;
};

export const Input = <T extends Record<string, any>>({
  name,
  defaultValue,
  type = "text",
  className = "",
  maxLength,
}: Props<T>) => {
  return (
    <ShadcnInput
      name={name as string}
      defaultValue={defaultValue}
      type={type}
      className={className}
      maxLength={maxLength}
    />
  );
};
