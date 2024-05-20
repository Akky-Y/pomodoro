import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/74072948?s=400&u=6595e7b3c4583842a53dc9af3d36da8d58757898&v=4" />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">user status</PopoverContent>
    </Popover>
  );
}
