"use client";
import DemoSidebar from "@/components/demo/sidebar";
import TaskItem from "@/components/demo/task-item";
import { useTaskLogic } from "@/hooks/use-task-logic";
import { INITIAL_TASKS } from "@/constants";
import { Archive, CalendarClock, Sparkles } from "lucide-react";

export default function DemoPage() {
  const { tasks, setActiveTab, setTasks, activeTab, toggleDone } =
    useTaskLogic(INITIAL_TASKS);
  return (
    <section className="w-full py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs border inline-flex px-4 py-2 items-center   border-white/20 rounded-full font-mono text-white/80 tracking-widest uppercase mb-4">
            Live Preview
          </div>
          <h2 className="text-gray-300 text-3xl md:text-4xl font-bold tracking-tight mb-4">
            See <span className="text-[#c8f060]">Taxks</span> in action
          </h2>
          <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            This is a live preview of the actual interface. Interact with it —
            check off tasks, sort by AI priority, and explore the layout.
          </p>
        </div>

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

        {/* Feature callouts below demo */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: <CalendarClock />,
              title: "Task management",
              desc: "Create, organize, and complete tasks across projects",
            },
            {
              icon: <Archive />,
              title: "Project grouping",
              desc: "Keep work separated by project with color coding",
            },
            {
              icon: <Sparkles />,
              title: "AI prioritization",
              desc: "One click to sort your entire task list by urgency",
            },
          ].map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-lg text-white/80 mb-3 flex items-center justify-center">
                {f.icon}
              </div>
              <div className="text-lg text-[#c8f060] font-semibold mb-1">
                {f.title}
              </div>
              <div className="text-sm text-white/60 leading-relaxed">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
