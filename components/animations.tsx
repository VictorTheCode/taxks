"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const PageReveal = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // reveal animation
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
        },
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup to prevent memory leaks
  }, []);

  return (
    <div ref={containerRef} className="will-change-transform">
      {children}
    </div>
  );
};
