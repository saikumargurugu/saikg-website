import React, { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 w-full h-full object-cover z-[-1]"
      src="https://storage.googleapis.com/saikgweb/57c5a2dc-f2cf-4b51-a8bb-ae6641bf9f11.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/public/globe.svg"
      style={{ pointerEvents: 'none' }}
    />
  );
}
