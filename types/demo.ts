export type Priority = "HIGH" | "MEDIUM" | "LOW";
export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type DemoTask = {
  id: number;
  title: string;
  project: string;
  priority: Priority;
  status: Status;
  due: string;
  ai: boolean;
};

export interface TaskItemProps {
  task: DemoTask;
  onToggle: (id: number) => void;
}
