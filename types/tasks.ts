// =====================================================
// TASKS & PROJECTS TYPES
// =====================================================

// set tasks priority & status
export type Priority = "LOW" | "MEDIUM" | "HIGH";
export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

// project type
export type Project = {
  id: string;
  name: string;
  color: string; // hex color code
  createdAt: Date;
  updatedAt: Date;
};

// task types
export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: Date | null;
  aiSorted: boolean; // is this task sorted by AI?
  projectId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

// ==================================
// INPUT TYPES
// ==================================

export type CreateProjectInput = {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: Priority;
  dueDate?: string; // string from request body, parse to Date
  projectId: string;
};

export type UpdateProjectInput = Partial<CreateProjectInput>;

// all types with relations from prisma
export type TaskWithProject = Task & {
  project: Project;
};

export type TaskWithAll = Task & {
  project: Project;
};

export type ProjectWithTasks = Project & {
  tasks: Task[];
  _count: { tasks: number }; // number of tasks in this project
};
