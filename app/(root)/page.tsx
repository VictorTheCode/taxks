"use client";

import { useRef } from "react";
import Navbar from "@/components/landing/navbar";
import Testimonials from "@/components/landing/testimonials";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/landing/footer";
import BentoGrid from "@/components/landing/bento";
import Image from "next/image";
import useUser from "@/hooks/use-user";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { user, loading } = useUser();

  const router = useRouter();

  const containerRef = useRef(null);
  const revealRef = useRef(null);

  useGSAP(
    () => {
      // The Dashboard Reveal Animation
      gsap.fromTo(
        revealRef.current,
        { scale: 0.9, y: 100, opacity: 0, rotateX: 15 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          rotateX: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: revealRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen text-white font-sans selection:bg-[#c8f060] selection:text-black bg-[#0d0e15] relative"
    >
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none z-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-[#c8f060]/5 blur-[120px] rounded-full pointer-events-none" />

      <Navbar />

      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs tracking-widest capitalize text-[#c8f060] border border-[#c8f060]/20 bg-[#c8f060]/5 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-3 h-3" />
            Your AI-Task Manager
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Focus on <span className="text-[#c8f060] italic">work</span>
            <br />
            <span className="text-white/30 italic">not managing it.</span>
          </motion.h1>

          <motion.p className="text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
            Taxks uses AI to organize, prioritize, and schedule your tasks so
            you can spend less time planning and more time doing.
          </motion.p>

          <div className="flex flex-col justify-center gap-4 mb-24 sm:flex-row">
            <Link
              href="/sign-up"
              className="bg-[#c8f060] text-black px-8 py-4 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Sign up
            </Link>
            <Link
              href="/demo"
              className="bg-white/5  border border-white/10 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              View Demo
            </Link>
          </div>

          <div ref={revealRef} className="relative group">
            <div className="absolute -inset-1 bg-linear-to-b from-[#c8f060]/20 to-transparent rounded-3xl blur-2xl opacity-50" />
            <div className="relative aspect-video w-full rounded-3xl border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-2xl">
              <Image src="/images/preview.png" alt="Dashboard" fill />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Built for Focus
              </h2>
              <p className="text-white/40">
                Simple task management, supercharged with smart suggestions to
                help you get things done.
              </p>
            </div>
            <div className=" flex justify-center items-center gap-2 font-bold text-[#c8f060] bg-[#c8f060]/5 border border-[#c8f060]/10 px-3 py-1 rounded">
              {/* another icon for AI */}
              <Brain className=" text-[#c8f060]" />{" "}
              <p className="text-md">AI-Powered</p>
            </div>
          </div>

          <BentoGrid />
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
};

export default HomePage;
