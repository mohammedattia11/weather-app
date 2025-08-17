import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useId } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input
          id={id}
          className="peer ps-9 placeholder:text-lg"
          placeholder="Search for a city..."
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Search size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
