"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shadcn-ui/command";
import { useState } from "react";

type Props = {
  placeholder: string;
};

// 検索ボックスを表示するタイミングは、フォーカス時？それとも何かキーワードを入力した時？
export const Search = ({ placeholder }: Props) => {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <Command>
      <CommandInput
        placeholder={placeholder}
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
      />
      {open && (
        <>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="ジャンル">
              <CommandItem>イタリアン</CommandItem>
              <CommandItem>中華</CommandItem>
            </CommandGroup>
            <CommandGroup heading="レストラン">
              <CommandItem>餃子の王将</CommandItem>
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
        </>
      )}
    </Command>
  );
};
