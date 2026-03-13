import { cva } from "class-variance-authority";
import { Priority } from "@/types";

const badgeVariants = cva(
  "text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors",
  {
    variants: {
      priority: {
        HIGH: "text-red-400 border-red-400/30 bg-red-400/5",
        MEDIUM: "text-amber-400 border-amber-400/30 bg-amber-400/5",
        LOW: "text-blue-400 border-blue-400/30 bg-blue-400/5",
      },
    },
    defaultVariants: {
      priority: "LOW",
    },
  },
);

export function PriorityBadge({ priority }: { priority: Priority }) {
  const labels: Record<Priority, string> = {
    HIGH: "High",
    MEDIUM: "Med",
    LOW: "Low",
  };
  return (
    <span className={badgeVariants({ priority })}>{labels[priority]}</span>
  );
}
