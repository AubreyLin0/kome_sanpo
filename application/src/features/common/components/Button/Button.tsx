import { Button as ShadcnButton } from "@/shadcn-ui/button";

type Props = {
  label: string;
  variant?: "default" | "outline";
};

export const Button = ({ label, variant = "default" }: Props) => (
  <ShadcnButton variant={variant}>{label}</ShadcnButton>
);
