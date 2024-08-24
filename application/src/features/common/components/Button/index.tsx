import { ReactNode } from "react";
import { Button as ShadcnButton } from "@/src/shadcn-ui/button";

type Props = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "xs";
  disabled?: boolean;
  type?: "button" | "submit";
};

export const Button = ({
  children,
  variant = "default",
  className = "",
  size = "default",
  disabled = false,
  type = "button",
}: Props) => (
  <ShadcnButton
    variant={variant}
    className={className}
    size={size}
    disabled={disabled}
    type={type}
  >
    {children}
  </ShadcnButton>
);
