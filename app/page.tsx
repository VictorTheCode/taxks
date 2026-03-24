"use client";

import { useRef } from "react";
import Navbar from "@/components/landing/navbar";
import Testimonials from "@/components/landing/testimonials";
// import { features, steps } from "@/constants";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/landing/footer";
import BentoGrid from "@/components/landing/bento";
import { useTaskLogic } from "@/hooks/use-task-logic";
import { INITIAL_TASKS } from "@/constants";
import DemoSidebar from "@/components/demo/sidebar";
import TaskItem from "@/components/demo/task-item";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);
  const revealRef = useRef(null);
  const { tasks, setActiveTab, setTasks, activeTab, toggleDone } =
    useTaskLogic(INITIAL_TASKS);

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
            Taxks uses high-fidelity neural scheduling to automate your
            workflow. Engineered for those who value deep work over manual
            planning.
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
              View Architecture
            </Link>
          </div>

          <div ref={revealRef} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#c8f060]/20 to-transparent rounded-[2rem] blur-2xl opacity-50" />
            <div className="relative aspect-video w-full rounded-[1.5rem] border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center border-t border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                <span className="w-full h-full">
                  <div className="rounded-xl h-full border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
                    {/* Window chrome */}
                    <div className="bg-[#111] border-b border-white/5 px-4 py-3 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white/5 border border-white/8 rounded-md px-4 py-1 text-xs text-white/25 font-mono">
                          taxks/dashboard
                        </div>
                      </div>
                    </div>

                    {/* App body */}
                    <div className="bg-[#0e0e0e] flex" style={{ height: 420 }}>
                      {/* Mini sidebar */}
                      <DemoSidebar />

                      {/* Main panel */}
                      <div className="flex-1 flex flex-col min-w-0">
                        {/* Topbar */}
                        <div className="h-12 border-b border-white/5 px-4 flex items-center justify-between flex-shrink-0">
                          <span className="text-sm font-bold">Tasks</span>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-white/5 flex-shrink-0">
                          {(["all", "active", "done"] as const).map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`px-4 h-10 text-xs capitalize transition-colors cursor-pointer
                      ${
                        activeTab === tab
                          ? "text-white border-b-2 border-[#c8f060]"
                          : "text-white/35 hover:text-white/60"
                      }`}
                            >
                              {tab}
                            </button>
                          ))}
                        </div>

                        {/* Task list */}
                        <div className="flex-1 overflow-y-auto">
                          {tasks.map((task) => (
                            <TaskItem
                              key={task.id}
                              task={task}
                              onToggle={() => toggleDone(task.id)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Core Infrastructure
              </h2>
              <p className="text-white/40">
                The engine behind your productivity. Scalable, fast, and
                remarkably intelligent.
              </p>
            </div>
            <div className="text-xs font-mono text-[#c8f060] bg-[#c8f060]/5 border border-[#c8f060]/10 px-3 py-1 rounded">
              v1.0.4-stable
            </div>
          </div>

          <BentoGrid />

          {/* <div className="grid md:grid-cols-12 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${
                  i === 0
                    ? "md:col-span-7"
                    : i === 1
                      ? "md:col-span-5"
                      : "md:col-span-12"
                } bg-white/2 border border-white/5 p-10 rounded-3xl hover:border-[#c8f060]/30 transition-colors group`}
              >
                <div className="text-[#c8f060] mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")} /
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg max-w-sm">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
};

export default HomePage;
