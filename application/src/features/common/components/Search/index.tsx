"use client";
import { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shadcn-ui/command";

type SearchData = {
  id: string;
  genre: string;
}[];

type Props = {
  placeholder: string;
  data: SearchData;
};

// 検索ボックスを表示するタイミングは、フォーカス時？それとも何かキーワードを入力した時？
export const Search = ({ placeholder, data }: Props) => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
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
            <CommandGroup>
              {data.map((item) => (
                <CommandItem key={item.id} onClick={() => setValue(item.genre)}>
                  {item.genre}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
        </>
      )}
    </Command>
  );
};
