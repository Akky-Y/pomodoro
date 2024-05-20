import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ListVideo } from "lucide-react";

export default function Playlist() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <ListVideo size={26} />
          <span className="sr-only">プレイリスト</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">user status</PopoverContent>
    </Popover>
  );
}
