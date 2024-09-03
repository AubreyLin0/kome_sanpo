import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shadcn-ui/select";

type Props<T extends Record<string, any>> = {
  name: keyof T;
  defaultValue?: string;
  selectItems: string[];
  className?: string;
};
//todo:Propsを追加する
export const Select = <T extends Record<string, any>>({
  selectItems,
  name,
}: Props<T>) => {
  return (
    <ShadcnSelect name={name as string}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        {selectItems.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
};
