import { ReactNode } from "react";
import { Button as ShadcnButton } from "@/shadcn-ui/button";

type Props = {
  label: ReactNode;
  variant?: "default" | "outline";
  disabled?: boolean;
};

export const Button = ({
  label,
  variant = "default",
  disabled = false,
}: Props) => (
  <ShadcnButton variant={variant} disabled={disabled}>
    {label}
  </ShadcnButton>
);
