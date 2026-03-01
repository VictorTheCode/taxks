import React from "react";
import { motion } from "framer-motion";
// import { XIcon } from "lucide-react";

interface Testimonial {
  name: string;
  handle: string;
  text: string;
}

const XIcon = ({ width = 20, height = 20, color = "currentColor" }) => {
  return (
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
};

const testimonials: Testimonial[] = [
  {
    name: "Mr Levy",
    handle: "@curlyhair_dev",
    text: "I’m pumped!!!🔥🔥",
  },
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
    text: "Ohhh all the gamblers betting on games will LOOVE this. It's like the Bloomberg for sports betting",
  },
  {
    name: "Subhan Malik",
    handle: "@subhanmalik911",
    text: "This UI is fire, what tool you using for design? Let’s connect bro",
  },
  {
    name: "Tight Studio",
    handle: "@tight_studio",
    text: "Love the attention to detail, dynamic states feel polished.",
  },
  {
    name: "Vice Mayor",
    handle: "@real_vicemayor",
    text: "Let's go 🚀🚀🚀",
  },
  {
    name: "Him",
    handle: "@YoungLad_Him",
    text: "🔥🔥🔥LFG !!",
  },
  {
    name: "Michael",
    handle: "@InsightCracker",
    text: "🚀",
  },
  {
    name: "Blank",
    handle: "@Balde_Arc",
    text: "Get in",
  },
];

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
    <div className="relative flex overflow-x-hidden py-4 w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
                .pause-on-interaction:hover, 
                .pause-on-interaction:active {
                    animation-play-state: paused !important;
                }
            `,
        }}
      />
      <div
        className={`flex whitespace-nowrap gap-6 pause-on-interaction ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((t, i) => (
          <a
            key={`${i}`}
            href={`https://x.com/${t.handle.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-87.5 w-62.5 whitespace-normal bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-white/5 relative group/card hover:border-[#a8cc1f] transition-all hover:scale-[1.02] shrink-0 cursor-pointer block no-underline"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-xs text-white/50 group-hover/card:text-[#a8cc1f] transition-colors">
                    {t.handle}
                  </span>
                </div>
              </div>
              <XIcon />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
              &quot;{t.text}&quot;
            </p>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-400/5 blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tight">
            What Early Users
            <br />
            <span className="text-[#a8cc1f]">Are Saying</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-400 mx-auto leading-relaxed font-medium">
            Real feedback from people testing SafeScore predictions.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <MarqueeRow items={Row1} />
          <MarqueeRow items={Row2} reverse />

          {/* Side Shadows / Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
