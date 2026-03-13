import { TaskItemProps } from "@/types";
import React from "react";
import { PriorityBadge } from "./priority-badge";

const TaskItem = ({ task, onToggle }: TaskItemProps) => {
  return (
    <div>
      <div
        key={task.id}
        className="flex items-center gap-3 px-4 py-3 border-b border-white/4 hover:bg-white/2 transition-colors group"
      >
        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className={`w-4 h-4 rounded shrink-0 border flex items-center justify-center transition-all cursor-pointer
                        ${
                          task.status === "DONE"
                            ? "bg-[#c8f060] border-[#c8f060]"
                            : "border-white/15 hover:border-[#c8f060]/50"
                        }`}
        >
          {task.status === "DONE" && (
            <span className="text-[9px] text-black font-black">✓</span>
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
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-mono text-white/20 hidden sm:block">
            {task.project}
          </span>
          {/* Priority */}
          <PriorityBadge priority={task.priority} />
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
    </div>
  );
};

export default TaskItem;
