import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";

export default function OnlineStatus() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <User />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">user status</PopoverContent>
    </Popover>
  );
}
