import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { menuItems } from "@/data/dummyData";

export function Menu() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a menu" />
      </SelectTrigger>
      <SelectContent>
        {menuItems.map((item) => (
          <SelectItem key={item.title} value={item.title}>
            <div className="flex items-center gap-2">
              <item.icon />
              <span>{item.title}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
