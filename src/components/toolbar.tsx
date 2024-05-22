import { ModeToggle } from "@/components/mode-toggles";
import Pomodoro from "@/components/pomodoro";
import dynamic from "next/dynamic";

const OnlineStatus = dynamic(() => import("@/components/online-status"), {
  ssr: false,
});
const Playlist = dynamic(() => import("@/components/playlist"), { ssr: false });
const UserMenu = dynamic(() => import("@/components/user-menu"), {
  ssr: false,
});

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
