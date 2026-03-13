import { DemoTask, Status } from "@/types";

export const INITIAL_TASKS: DemoTask[] = [
  {
    id: 1,
    title: "exercise",
    project: "Workout",
    priority: "HIGH",
    status: "IN_PROGRESS",
    due: "Mar 2",
    ai: false,
  },
  {
    id: 2,
    title: "read 10 pages",
    project: "Self-Improvement",
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
    title: "call my babe 😘",
    project: "Personal",
    priority: "HIGH",
    status: "DONE",
    due: "Mar 1",
    ai: false,
  },
  {
    id: 5,
    title: "implement payment gateway in backend",
    project: "Work",
    priority: "LOW",
    status: "TODO",
    due: "Mar 7",
    ai: true,
  },
];

// const PRIORITY_STYLES: Record<Priority, string> = {
//   HIGH: "text-red-400   border-red-400/30   bg-red-400/5",
//   MEDIUM: "text-amber-400 border-amber-400/30 bg-amber-400/5",
//   LOW: "text-blue-400  border-blue-400/30  bg-blue-400/5",
// };

export const STATUS_LABEL: Record<Status, string> = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
