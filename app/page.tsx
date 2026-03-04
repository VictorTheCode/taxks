"use client";

import Navbar from "@/components/landing/navbar";
import Testimonials from "@/components/landing/testimonials";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "AI Prioritization",
    description:
      "Analyzes your tasks and deadlines to surface what actually needs your attention first.",
  },
  {
    title: "Smart Scheduling",
    description:
      "Finds the best time slots for deep work based on your habits and energy patterns.",
  },
  {
    title: "Productivity Insights",
    description:
      "Tracks your patterns over time and surfaces what's slowing you down.",
  },
];

const steps = [
  { number: "01", text: "Add your tasks naturally" },
  { number: "02", text: "AI analyzes and organizes" },
  { number: "03", text: "Work your smart schedule" },
];

const HomePage = () => {
  return (
    <main className="min-h-screen text-white font-sans selection:bg-white selection:text-black">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0.1}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-md text-white/50 border border-white/10 rounded-full px-3 py-1.5 mb-10 tracking-widest uppercase"
          >
            <Sparkles className="w-3 h-3" />
            AI-Powered Task Manager
          </motion.div>

          <motion.h1
            custom={0.2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Focus on <span className="text-[#a8cc1f]">work</span>
            <br />
            <span className="text-white/30">not on managing it.</span>
          </motion.h1>

          <motion.p
            custom={0.35}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-base text-white/40 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Taxks uses AI to organize, prioritize, and schedule your tasks so
            you can spend less time planning and more time doing.
          </motion.p>

          <motion.div
            custom={0.45}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-3"
          >
            <Link
              href="/signup"
              className="bg-white text-black px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              Start for free
            </Link>
            <Link
              href="/demo"
              className="border border-white/10 text-white/60 px-6 py-2.5 rounded-md text-sm font-medium hover:border-white/20 hover:text-white/80 transition-colors duration-200"
            >
              See demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="h-px bg-white/5" />
      </motion.div>

      {/* ── Features ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-sm text-white/50 tracking-widest uppercase mb-12"
          >
            Features
          </motion.p>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i * 0.1}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="bg-[#0a0a0a] p-8 hover:bg-white/2 transition-colors duration-300"
              >
                <div className="text-xs text-white/20 mb-6 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs text-white/30 tracking-widest uppercase mb-12"
          >
            How it works
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i * 0.12}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                <span className="text-4xl font-bold text-white/10 font-mono">
                  {step.number}
                </span>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6 border-t border-white/5">
        <motion.div
          custom={0}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to get focused?</h2>
            <p className="text-sm text-white/40">
              Free to start. No credit card required.
            </p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 bg-white text-black px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            Create your account
          </Link>
        </motion.div>
      </section>

      <Testimonials />

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm font-semibold">Taxks</span>
          <p className="text-xs text-white/20">
            © 2026 Taxks. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
