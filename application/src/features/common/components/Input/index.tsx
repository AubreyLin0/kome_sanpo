import { Input as ShadcnInput } from "@/src/shadcn-ui/input";

type Props = {
  name: string;
  defaultValue: string;
};

export const Input = () => {
  return <ShadcnInput />;
};
