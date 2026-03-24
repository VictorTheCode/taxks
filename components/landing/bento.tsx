"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart3, Clock, Layers } from "lucide-react";

const features = [
  {
    title: "Neural Prioritization",
    description:
      "Our core engine analyzes your task velocity and deadlines to auto-rank your day. No more manual sorting.",
    className: "md:col-span-7 md:row-span-2",
    icon: <Brain className="w-5 h-5 text-[#c8f060]" />,
  },
  {
    title: "Atomic Security",
    description:
      "JWT-based auth with encrypted storage. Your data is your own.",
    className: "md:col-span-5 md:row-span-1",
    icon: <Shield className="w-5 h-5 text-[#c8f060]" />,
  },
  {
    title: "Real-time Sync",
    description: "Zero latency updates across all devices.",
    className: "md:col-span-5 md:row-span-1",
    icon: <Zap className="w-5 h-5 text-[#c8f060]" />,
  },
  {
    title: "Velocity Tracking",
    description: "Visual metrics to see how fast you're clearing the backlog.",
    className: "md:col-span-4 md:row-span-1",
    icon: <BarChart3 className="w-5 h-5 text-[#c8f060]" />,
  },
  {
    title: "Deep Work Modes",
    description: "Integrated timers to keep you in the zone.",
    className: "md:col-span-4 md:row-span-1",
    icon: <Clock className="w-5 h-5 text-[#c8f060]" />,
  },
  {
    title: "Modular Schema",
    description: "Built on Prisma for lightning-fast database queries.",
    className: "md:col-span-4 md:row-span-1",
    icon: <Layers className="w-5 h-5 text-[#c8f060]" />,
  },
];

const BentoGrid = () => {
  return (
    <section className="py-32 px-6 bg-[#0d0e15]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-mono text-[#c8f060] uppercase tracking-[0.3em] block mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Architected for{" "}
            <span className="text-white/20 italic">Performance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.02] p-8 hover:border-[#c8f060]/30 transition-all duration-500 ${feature.className}`}
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex p-2 rounded-lg bg-[#c8f060]/5 border border-[#c8f060]/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8f060]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
