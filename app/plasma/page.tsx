"use client";
import { Plasma } from "../../components/plasma";

export default function PlasmaPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#2F9A8A"
          speed={0.2}
          direction="reverse"
          scale={1.5}
          opacity={2}
          mouseInteractive={false}
        />
      </div>
      <div className="relative z-10 flex items-start justify-between p-4 text-white">
        <div className="text-sm opacity-75">
          Open DevTools Console and run the capture snippet to download a still.
        </div>
      </div>
    </main>
  );
}
