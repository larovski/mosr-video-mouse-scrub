import dynamic from "next/dynamic";

const StickyCursor = dynamic(() => import("@/components/sticky-cursor"), {
  ssr: false,
});

const VideoScrub = dynamic(() => import("@/components/video-mouse-scrub"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen">
      <StickyCursor />
      <VideoScrub />
    </main>
  );
}
