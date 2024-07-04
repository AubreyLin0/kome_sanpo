import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shadcn-ui/select";

export const Select = () => {
  return (
    <ShadcnSelect>
      <SelectTrigger className="w-[180px] grid-column-end--1 mr-4">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </ShadcnSelect>
  );
};
