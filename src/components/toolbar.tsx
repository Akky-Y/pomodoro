import { ModeToggle } from "@/components/mode-toggles";
import OnlineStatus from "@/components/online-status";
import Playlist from "@/components/playlist";
import Pomodoro from "@/components/pomodoro";
import UserMenu from "@/components/user-menu";

export default function Toolbar() {
  return (
    <div className="bg-muted w-full px-4 border-t full h-14 gap-3 flex items-center">
      <Pomodoro />
      <span className="flex-1" />
      <OnlineStatus />
      <Playlist />
      <ModeToggle />
      <UserMenu />
    </div>
  );
}
