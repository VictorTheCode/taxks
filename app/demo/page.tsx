"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Priority = "HIGH" | "MEDIUM" | "LOW";
type Status = "TODO" | "IN_PROGRESS" | "DONE";

type DemoTask = {
  id: number;
  title: string;
  project: string;
  priority: Priority;
  status: Status;
  due: string;
  ai: boolean;
};

// ─── Static demo data ─────────────────────────────────────────────────────────
const INITIAL_TASKS: DemoTask[] = [
  {
    id: 1,
    title: "Set up Prisma schema",
    project: "Taxks App",
    priority: "HIGH",
    status: "IN_PROGRESS",
    due: "Mar 2",
    ai: false,
  },
  {
    id: 2,
    title: "Build auth API endpoints",
    project: "Taxks App",
    priority: "HIGH",
    status: "TODO",
    due: "Mar 5",
    ai: true,
  },
  {
    id: 3,
    title: "Design landing hero",
    project: "Portfolio",
    priority: "MEDIUM",
    status: "TODO",
    due: "Mar 6",
    ai: false,
  },
  {
    id: 4,
    title: "Configure Neon DB",
    project: "Taxks App",
    priority: "HIGH",
    status: "DONE",
    due: "Mar 1",
    ai: false,
  },
  {
    id: 5,
    title: "Push portfolio to Vercel",
    project: "Portfolio",
    priority: "LOW",
    status: "TODO",
    due: "Mar 7",
    ai: true,
  },
];

const PRIORITY_STYLES: Record<Priority, string> = {
  HIGH: "text-red-400   border-red-400/30   bg-red-400/5",
  MEDIUM: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  LOW: "text-blue-400  border-blue-400/30  bg-blue-400/5",
};

const STATUS_LABEL: Record<Status, string> = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function DemoPage() {
  const [tasks, setTasks] = useState<DemoTask[]>(INITIAL_TASKS);
  const [activeTab, setActiveTab] = useState<"all" | "active" | "done">("all");
  const [aiRunning, setAiRunning] = useState(false);
  const [aiDone, setAiDone] = useState(false);

  const filtered = tasks.filter((t) => {
    if (activeTab === "active") return t.status !== "DONE";
    if (activeTab === "done") return t.status === "DONE";
    return true;
  });

  function toggleDone(id: number) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "DONE" ? "TODO" : "DONE" }
          : t,
      ),
    );
  }

  // Simulates the AI priority sort — just a demo, no real API call
  function runAiSort() {
    setAiRunning(true);
    setAiDone(false);
    setTimeout(() => {
      setTasks((prev) =>
        [...prev]
          .sort((a, b) => {
            const order: Record<Priority, number> = {
              HIGH: 0,
              MEDIUM: 1,
              LOW: 2,
            };
            return order[a.priority] - order[b.priority];
          })
          .map((t) => ({ ...t, ai: true })),
      );
      setAiRunning(false);
      setAiDone(true);
    }, 1200);
  }

  return (
    <section className="w-full py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-4">
            Live Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            See Taxks in action
          </h2>
          <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            This is a live preview of the actual interface. Interact with it —
            check off tasks, sort by AI priority, and explore the layout.
          </p>
        </div>

        {/* App window */}
        <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
          {/* Window chrome */}
          <div className="bg-[#111] border-b border-white/5 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/5 border border-white/8 rounded-md px-4 py-1 text-xs text-white/25 font-mono">
                taxks.app/dashboard
              </div>
            </div>
          </div>

          {/* App body */}
          <div className="bg-[#0e0e0e] flex" style={{ height: 420 }}>
            {/* Mini sidebar */}
            <div className="w-44 border-r border-white/5 bg-[#111] flex flex-col py-4 flex-shrink-0">
              <div className="px-4 mb-5 text-sm font-bold tracking-tight">
                Taxks<span className="text-[#c8f060]">.</span>
              </div>
              {[
                { icon: "▣", label: "Dashboard" },
                { icon: "◻", label: "Tasks", active: true },
                { icon: "⬡", label: "Projects" },
                { icon: "✦", label: "AI Features" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 text-xs cursor-default relative
                    ${item.active ? "text-white" : "text-white/35"}`}
                >
                  {item.active && (
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-[#c8f060] rounded-r" />
                  )}
                  <span className="opacity-60 text-xs">{item.icon}</span>
                  {item.label}
                </div>
              ))}
              <div className="mt-auto px-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#c8f060]/10 border border-[#c8f060]/30 flex items-center justify-center text-[10px] font-bold text-[#c8f060]">
                    S
                  </div>
                  <div>
                    <div className="text-xs font-semibold leading-none mb-0.5">
                      Samuel
                    </div>
                    <div className="text-[10px] text-white/30 font-mono">
                      Free
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Topbar */}
              <div className="h-12 border-b border-white/5 px-4 flex items-center justify-between flex-shrink-0">
                <span className="text-sm font-bold">Tasks</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={runAiSort}
                    disabled={aiRunning}
                    className="flex items-center gap-1.5 text-[11px] font-mono text-[#c8f060] bg-[#c8f060]/8 border border-[#c8f060]/20 rounded-md px-2.5 py-1 transition-opacity hover:opacity-80 disabled:opacity-40 cursor-pointer"
                  >
                    {aiRunning ? (
                      <span className="animate-pulse">✦ sorting...</span>
                    ) : aiDone ? (
                      "✦ AI sorted"
                    ) : (
                      "✦ AI sort"
                    )}
                  </button>
                </div>
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
                {filtered.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleDone(task.id)}
                      className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-all cursor-pointer
                        ${
                          task.status === "DONE"
                            ? "bg-[#c8f060] border-[#c8f060]"
                            : "border-white/15 hover:border-[#c8f060]/50"
                        }`}
                    >
                      {task.status === "DONE" && (
                        <span className="text-[9px] text-black font-black">
                          ✓
                        </span>
                      )}
                    </button>

                    {/* Title */}
                    <span
                      className={`flex-1 text-xs font-medium leading-tight
                      ${task.status === "DONE" ? "line-through text-white/25" : "text-white/80"}`}
                    >
                      {task.title}
                    </span>

                    {/* Tags */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[10px] font-mono text-white/20 hidden sm:block">
                        {task.project}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${PRIORITY_STYLES[task.priority]}`}
                      >
                        {task.priority === "HIGH"
                          ? "High"
                          : task.priority === "MEDIUM"
                            ? "Med"
                            : "Low"}
                      </span>
                      {task.ai && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border text-[#c8f060] border-[#c8f060]/25 bg-[#c8f060]/5">
                          ✦ AI
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-white/20">
                        {task.due}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature callouts below demo */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: "◻",
              title: "Task management",
              desc: "Create, organize, and complete tasks across projects",
            },
            {
              icon: "⬡",
              title: "Project grouping",
              desc: "Keep work separated by project with color coding",
            },
            {
              icon: "✦",
              title: "AI prioritization",
              desc: "One click to sort your entire task list by urgency",
            },
          ].map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-lg text-white/20 mb-3">{f.icon}</div>
              <div className="text-xs font-semibold mb-1">{f.title}</div>
              <div className="text-xs text-white/35 leading-relaxed">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
