import { useEffect, useState } from "react";

export default function ParallaxVideo() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.min(offsetY / 1000, 1);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        src="/cirugia.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0}px)` }}
      />

      {/* Overlay negro*/}
      <div className="absolute inset-0 bg-black/30" />

      {/* Overlay blanco */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(255,255,255,${opacity})` }}
      />
    </div>
  );
}