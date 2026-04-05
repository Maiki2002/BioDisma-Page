export default function ParallaxVideo() {
  return (
    <div className="absolute inset-x-0 top-0 h-[100svh] md:h-screen -z-10 overflow-hidden" aria-hidden="true">
      <video
        src="/cirugia.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
}
