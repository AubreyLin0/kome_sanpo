import { ReactNode } from "react";

import { Button as ShadcnButton } from "@/shadcn-ui/button";

type Props = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export const Button = ({
  children,
  variant = "default",
  className = "",
}: Props) => (
  <ShadcnButton variant={variant} className={className}>
    {children}
  </ShadcnButton>
);
