import { DemoTask } from "@/types";
import { useMemo, useState } from "react";

export function useTaskLogic(initialTasks: DemoTask[]) {
  const [tasks, setTasks] = useState<DemoTask[]>(initialTasks);
  const [activeTab, setActiveTab] = useState<"all" | "active" | "done">("all");

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      if (activeTab === "active") return t.status !== "DONE";
      if (activeTab === "done") return t.status === "DONE";
      return true;
    });
  }, [tasks, activeTab]);

  const toggleDone = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "DONE" ? "TODO" : "DONE" }
          : t,
      ),
    );
  };

  return {
    tasks: filteredTasks,
    setTasks,
    activeTab,
    setActiveTab,
    toggleDone,
  };
}
