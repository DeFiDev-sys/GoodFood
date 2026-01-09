import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-2 p-2 mx-4 bg-[#F1F2F7] rounded-md w-[50%]">
      <Input
        type="search"
        placeholder={placeholder}
        className="bg-[#F1F2F7] border-none shadow-none outline-none px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Search className="w-6 h-6 text-[#9c9da7] mx-4 cursor-pointer" />
    </div>
  );
};

export default SearchInput;
