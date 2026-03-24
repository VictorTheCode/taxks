import { TaskItemProps } from "@/types";
import { motion } from "framer-motion";

const TaskItem = ({ task, onToggle }: TaskItemProps) => {
  const isOverdue = task.due === "Overdue"; // Or check your date logic

  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4 px-4 py-4 border-b border-white/3 hover:bg-white/1 transition-all group relative overflow-hidden"
    >
      {/* Checkbox Container */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300
            ${
              task.status === "DONE"
                ? "bg-[#c8f060] border-[#c8f060] shadow-[0_0_10px_rgba(200,240,96,0.2)]"
                : "border-white/10 hover:border-[#c8f060]/40 bg-white/[0.02]"
            }`}
        >
          {task.status === "DONE" && (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              className="text-black stroke-3"
            >
              <path
                d="M1.5 4L4 6.5L8.5 1.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Task Content */}
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`text-[13px] font-bold tracking-tight transition-all duration-300 truncate
            ${task.status === "DONE" ? "text-white/20 line-through" : "text-white/90"}`}
          >
            {task.title}
          </span>
          {task.ai && (
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#c8f060]/5 border border-[#c8f060]/10">
              <span className="text-[8px] font-black text-[#c8f060] uppercase tracking-tighter">
                ✦ AI SORTED
              </span>
            </div>
          )}
        </div>

        {/* Metadata Row */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            {task.project}
          </span>
          <div className="h-1 w-1 rounded-full bg-white/10" />
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-tighter
            ${isOverdue ? "text-red-500/80" : "text-white/20"}`}
          >
            {task.due}
          </span>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex items-center gap-2 shrink-0">
        {task.priority === "HIGH" && task.status !== "DONE" && (
          <span className="text-[9px] font-black px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20 uppercase tracking-tighter">
            High
          </span>
        )}

        {isOverdue && task.status !== "DONE" && (
          <span className="text-[9px] font-black px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/10 uppercase tracking-tighter">
            Overdue
          </span>
        )}
      </div>

      {/* Subtle Hover Glow Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c8f060] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default TaskItem;
