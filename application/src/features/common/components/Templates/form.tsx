import { Input } from "../Input";
import { Label } from "@/src/shadcn-ui/label";

type Props = {
  label: string;
};

const LabelInput = ({ label }: Props) => {
  return (
    <div className="grid grid-cols-[100px_1fr]">
      <Label className="flex items-center text-text">{label}</Label>
      <Input />
    </div>
  );
};

export const Form = () => {
  return (
    <form className="grid grid-rows-3 gap-6">
      <div className="grid grid-cols-2 gap-10">
        <LabelInput label="店名" />
        <LabelInput label="営業時間" />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <LabelInput label="ジャンル" />
        <LabelInput label="電話番号" />
      </div>
      <LabelInput label="住所" />
    </form>
  );
};
