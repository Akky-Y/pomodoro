"use client";

import Toolbar from "@/components/toolbar";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});
// import ReactPlayer from "react-player/lazy";

export default function Room() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-1">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        />
      </div>
      <Toolbar />
    </div>
  );
}
