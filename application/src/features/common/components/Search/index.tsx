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

export const Search = ({ placeholder, data }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputText] = useState<string>();
  const [selectedItem, setSelectedItem] = useState<string>();

  const handleSelect = (value: string) => {
    setInputText(value);
    setSelectedItem(value);
  };

  return (
    <Command value={selectedItem} isOpen={isOpen}>
      <CommandInput
        placeholder={placeholder}
        onClick={() => setIsOpen(true)}
        value={inputValue}
        onValueChange={(value) => {
          setInputText(value);
          if (selectedItem) {
            setSelectedItem(undefined);
          }
        }}
        onBlur={() => setIsOpen(false)}
        isOpen={isOpen}
      />
      {isOpen && (
        <>
          <CommandList isOpen={isOpen}>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.id}
                  //クリック時にonBlurでとじないようにするには、oonBlurより早く発火されるonMouseDownを使う
                  onMouseDown={(event) => {
                    event.preventDefault();
                    handleSelect(item.genre);
                  }}
                  // onMouseDownではエンターキーで選択できないので、onSelectも使う
                  onSelect={() => handleSelect(item.genre)}
                  value={item.genre}
                >
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
