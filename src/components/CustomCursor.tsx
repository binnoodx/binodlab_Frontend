"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { images } from "@/app/constants/images";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Disable on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 z-[9999]
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none
        transition-transform duration-75 ease-out
        lg:flex hidden
      "
    >
      <Image
        src={images.cursor.src}
        alt="cursor"
        width={32}
        height={32}
        priority
      />
    </div>
  );
}
