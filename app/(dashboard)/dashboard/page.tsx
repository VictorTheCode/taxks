import getSession from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/sign-in");
  }

  // Get the current user name
  const { name } = session;
  const firstName = name.split(" ")[0];

  const [tasks, projects] = await Promise.all([
    prisma.task.findMany({
      where: {
        userId: session.sub,
      },
    }),
    prisma.project.findMany({
      where: {
        userId: session.sub,
      },
    }),
  ]);

  // Get the number of tasks and calcuate it
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "DONE").length;

  // Get tasks for that are overdue
  const today = new Date();
  const overdueTasks = tasks.filter(
    (task) =>
      task.dueDate && new Date(task.dueDate) < today && task.status !== "DONE",
  ).length;

  return (
    <div className="space-y-8">
      {/* Welcome message */}
      <div>
        <h2 className="text-2xl font-bold">
          Welcome back, <span className="text-lime-500">{firstName}</span>
        </h2>
        <p className="text-white/50">
          Here&apos;s what&apos;s happening with your tasks today.
        </p>
      </div>

      {/* Dashboard stats */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Tasks */}
          <div className="rounded-xl border border-white/10 bg-[#0a0a1a]/95 p-6">
            <p className="text-sm text-white/50">Total Tasks</p>
            <p className="text-3xl font-bold">{totalTasks}</p>
          </div>

          {/* Completed Tasks */}
          <div className="rounded-xl border border-white/10 bg-[#0a0a1a]/95 p-6">
            <p className="text-sm text-white/50">Completed Tasks</p>
            <p className="text-3xl font-bold">{completedTasks}</p>
          </div>

          {/* Overdue Tasks */}
          <div className="rounded-xl border border-white/10 bg-[#0a0a1a]/95 p-6">
            <p className="text-sm text-white/50">Overdue Tasks</p>
            <p className="text-3xl font-bold">{overdueTasks}</p>
          </div>

          {/* Total Projects */}
          <div className="rounded-xl border border-white/10 bg-[#0a0a1a]/95 p-6">
            <p className="text-sm text-white/50">Total Projects</p>
            <p className="text-3xl font-bold">{projects.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
