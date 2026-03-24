"use client";

import TaskItem from "@/components/demo/task-item";
import { useTaskLogic } from "@/hooks/use-task-logic";
import { INITIAL_TASKS } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Terminal, Activity, Command } from "lucide-react";

export default function DemoPage() {
  const { tasks, setActiveTab, activeTab, toggleDone } =
    useTaskLogic(INITIAL_TASKS);

  return (
    <section className="relative min-h-screen w-full py-20 px-6 bg-[#0d0e15] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#c8f060]/5 blur-[120px] rounded-full pointer-events-none" />

      <Link
        href="/"
        className="fixed top-8 left-8 z-50 flex items-center gap-2 group transition-all"
      >
        <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-[#c8f060]/40 group-hover:text-[#c8f060]">
          <ArrowLeft className="w-4 h-4 text-lime-400" />
        </div>
        <span className="text-[10px] text-amber-400 font-mono uppercase tracking-wide opacity-50 group-hover:opacity-100 transition-opacity">
          Go Back
        </span>
      </Link>

      <div className="max-w-5xl mx-auto relative">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c8f060]/30" />
            <span className="text-[10px] font-mono text-[#c8f060] uppercase tracking-[0.4em]">
              Workspace
            </span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4">
            Test the{" "}
            <span className="italic text-white/30 text-gradient">logic.</span>
          </h1>
          <p className="text-sm text-white/40 max-w-sm font-mono uppercase tracking-tight">
            Check off tasks to see the AI intelligence in real-time.
          </p>
        </div>

        {/* The "Stripped Down" Dashboard Preview */}
        <div className="relative group">
          {/* Outer Frame */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none" />

          <div className="rounded-2xl border border-white/5 bg-[#0a0a0b] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row min-h-[520px]">
            {/* Sidebar (Mimicking your screenshot) */}
            <div className="w-full md:w-60 border-r border-white/5 bg-black/40 p-6 flex flex-col gap-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded bg-[#c8f060]" />
                <span className="text-xs font-black uppercase tracking-tighter">
                  Taxks.
                </span>
              </div>

              <div className="space-y-1">
                {["Dashboard", "All Tasks", "Projects"].map((item) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-md text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${item === "Dashboard" ? "bg-[#c8f060]/10 text-[#c8f060]" : "text-white/30 hover:text-white/60"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="p-3 rounded-lg border border-white/5 bg-white/2">
                  <div className="text-[9px] font-mono text-white/20 uppercase mb-2">
                    Plan
                  </div>
                  <div className="text-[11px] font-bold">
                    Free Tier // Active
                  </div>
                </div>
              </div>
            </div>

            {/* Main Task Area */}
            <div className="flex-1 flex flex-col">
              {/* Internal Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold">Today&apos;s Protocol</h2>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-1">
                    Mar 24, 2026
                  </p>
                </div>
                <button className="bg-[#c8f060] text-black text-[10px] font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform uppercase tracking-tighter">
                  + New Task
                </button>
              </div>

              {/* Task List (Stripped Down) */}
              <div className="p-6 space-y-4">
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => toggleDone(task.id)}
                  />
                ))}
              </div>
            </div>

            {/* AI Insights Panel (The "Secret Sauce" from your screenshot) */}
            <div className="w-full md:w-72 bg-white/[0.01] border-l border-white/5 p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#c8f060]">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                    AI Insights
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#c8f060]/5 border border-[#c8f060]/10">
                    <p className="text-[11px] text-[#c8f060]/90 leading-relaxed font-medium">
                      Exercise task is overdue.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[11px] text-white/40 leading-relaxed">
                      Deep work window detected: 9:00 AM — 11:00 AM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Callouts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          {[
            {
              label: "Task Management",
              value: "Create, organize, and complete tasks across projects",
              icon: <Activity className="w-3 h-3" />,
            },
            {
              label: "Project",
              value: "Keep work separated by project with color coding",
              icon: <Terminal className="w-3 h-3" />,
            },
            {
              label: "AI Integration",
              value: "One click to sort your entire task list by urgency",
              icon: <Command className="w-3 h-3" />,
            },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white/20 uppercase font-mono text-[10px] tracking-[0.2em]">
                {stat.icon}
                {stat.label}
              </div>
              <div className="text-sm font-black text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
