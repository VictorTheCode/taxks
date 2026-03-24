"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  handle: string;
  text: string;
}

const XIcon = ({ width = 16, height = 16, color = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill={color}
    />
  </svg>
);

const testimonials: Testimonial[] = [
  { name: "Mr Levy", handle: "@curlyhair_dev", text: "I’m pumped!!!🔥🔥" },
  {
    name: "Victor Tenold",
    handle: "@victortenold",
    text: "Trust is built in layers. Nice progress, keep iterating",
  },
  {
    name: "Zoey Zhang",
    handle: "@SaaSScout_",
    text: "love a niche b2c play. a tough but rewarding space.",
  },
  {
    name: "MPI",
    handle: "@RealPasternak",
    text: "Ohhh all the gamblers betting on games will LOOVE this.",
  },
  {
    name: "Subhan Malik",
    handle: "@subhanmalik911",
    text: "This UI is fire, what tool you using for design?",
  },
  {
    name: "Tight Studio",
    handle: "@tight_studio",
    text: "Love the attention to detail, dynamic states feel polished.",
  },
  { name: "Vice Mayor", handle: "@real_vicemayor", text: "Let's go 🚀🚀🚀" },
  { name: "Him", handle: "@YoungLad_Him", text: "🔥🔥🔥LFG !!" },
];

// Double the items for seamless looping
const Row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const Row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) => {
  return (
    <div className="relative flex overflow-x-hidden py-2 w-full">
      <div
        className={`flex whitespace-nowrap gap-4 pause-on-interaction ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((t, i) => (
          <a
            key={i}
            href={`https://x.com/${t.handle.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[320px] whitespace-normal bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05] relative group/card hover:border-[#c8f060]/40 transition-all duration-500 shrink-0 block no-underline"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-[10px] font-bold text-white/40">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[10px] font-mono text-white/30 group-hover/card:text-[#c8f060] transition-colors uppercase tracking-widest">
                    {t.handle}
                  </span>
                </div>
              </div>
              <div className="text-white/20 group-hover/card:text-white transition-colors">
                <XIcon />
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed font-medium group-hover/card:text-white/80 transition-colors">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Minimal accent glow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#c8f060]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0d0e15] overflow-hidden border-y border-white/[0.03] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[10px] font-mono text-[#c8f060] uppercase tracking-[0.3em] mb-4">
            Community
          </div>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
            Validated by <span className="italic text-white/20">builders.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <MarqueeRow items={Row1} />
          <MarqueeRow items={Row2} reverse />

          {/* Masking the edges for that "faded" professional look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-[#0d0e15] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-linear-to-l from-[#0d0e15] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
