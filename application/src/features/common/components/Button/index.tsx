import { ReactNode } from "react";
import { Button as ShadcnButton } from "@/shadcn-ui/button";

type Props = {
  children: ReactNode;
  variant?: "default" | "outline";
};

export const Button = ({ children, variant = "default" }: Props) => (
  <ShadcnButton variant={variant}>{children}</ShadcnButton>
);
