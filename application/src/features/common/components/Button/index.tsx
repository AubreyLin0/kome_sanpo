import { ReactNode } from "react";

import { Button as ShadcnButton } from "@/src/shadcn-ui/button";

type Props = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

export const Button = ({
  children,
  variant = "default",
  className = "",
  size = "default",
}: Props) => (
  <ShadcnButton variant={variant} className={className} size={size}>
    {children}
  </ShadcnButton>
);
