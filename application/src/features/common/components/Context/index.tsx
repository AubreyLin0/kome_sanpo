import { ReactNode } from "react";
import { Clock, Phone, CalendarX, MapPin, FilePenLine } from "lucide-react";
import { Button } from "../Button";

type SubTextProps = {
  children: ReactNode;
  text: string;
};

const SubText = ({ children, text }: SubTextProps) => {
  return (
    <div className="flex items-center w-fit">
      {children}
      <p className="pl-2">{text}</p>
    </div>
  );
};

type Props = {
  title: string;
  category: string;
  openingTime: string;
  phone: string;
  regularHoliday: string;
  address: string;
};

export const Context = ({
  title,
  category,
  openingTime,
  phone,
  regularHoliday,
  address,
}: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-text text-2xl md:text-3xl font-bold">{title}</h1>
        <div className="flex items-center w-fit">
          <p className="text-text w-[32px] font-semibold">編集</p>
          <FilePenLine className="h-5 w-5 text-primary" />
        </div>
      </div>
      <Button variant="outline" className="my-2 sm:my-4">
        {category}
      </Button>
      <div className="text-subText block md:grid grid-cols-[max-content_auto] gap-x-4">
        <SubText text={openingTime}>
          <Clock className="h-5 w-5" />
        </SubText>
        <SubText text={phone}>
          <Phone className="h-5 w-5" />
        </SubText>
        <SubText text={regularHoliday}>
          <CalendarX className="h-5 w-5" />
        </SubText>
        <SubText text={address}>
          <MapPin className="h-5 w-5" />
        </SubText>
      </div>
    </div>
  );
};
