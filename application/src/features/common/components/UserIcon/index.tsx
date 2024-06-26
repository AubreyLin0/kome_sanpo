import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn-ui/avatar";

type Props = {
  src: string;
};

export const UserIcon = ({ src }: Props) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
