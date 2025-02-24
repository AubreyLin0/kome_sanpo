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
} from "@/src/shadcn-ui/command";

type SearchData = {
  id: string;
  genre: string;
}[];

type Props = {
  placeholder: string;
  data: SearchData;
  className?: string;
};

// todo:server actionsを使用した検索処理を実装する
//　そのためにはCONFORMを使用する
export const Search = ({ placeholder, data, className = "" }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>();
  const [selectedItem, setSelectedItem] = useState<string>();

  const handleSelect = (value: string) => {
    setInputValue(value);
    setSelectedItem(value);
  };

  const handleOpen = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <Command value={selectedItem} isOpen={isOpen} className={className}>
      <CommandInput
        placeholder={placeholder}
        onClick={() => handleOpen(true)}
        value={inputValue}
        onValueChange={(value) => {
          setInputValue(value);
          if (selectedItem) {
            setSelectedItem(undefined);
          }
        }}
        onBlur={() => handleOpen(false)}
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
