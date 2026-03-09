export type Prority = "low" | "medium" | "high";
export type Status = "todo" | "in-progress" | "done";

export type Task = {
  id: number;
  title: string;
  desc: string;
  project: string;
  priority: Prority;
  due: string;
  status: Status;
  done: boolean;
  overdue: boolean;
  ai: boolean;
};
