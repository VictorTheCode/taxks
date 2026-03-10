import type { Prisma } from "@prisma/client";

// task queried with all project
export type TaskWithProjectPayload = Prisma.TaskGetPayload<{
  include: { project: true };
}>;

// project queried with all tasks
export type ProjectWithTasksPayload = Prisma.ProjectGetPayload<{
  include: { tasks: true };
}>;

// user queried with projects and tasks
export type UserWithProjectsAndTasksPayload = Prisma.UserGetPayload<{
  include: {
    projects: true;
    tasks: true;
  };
}>;
