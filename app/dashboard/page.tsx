import React from "react";
import { CheckCircle2, AlertCircle, Clock, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Mock data
  const stats = [
    { label: "Total Tasks", value: "24", icon: Clock, color: "bg-blue-500" },
    {
      label: "Completed",
      value: "16",
      icon: CheckCircle2,
      color: "bg-green-500",
    },
    {
      label: "In Progress",
      value: "5",
      icon: TrendingUp,
      color: "bg-purple-500",
    },
    { label: "Overdue", value: "3", icon: AlertCircle, color: "bg-red-500" },
  ];

  const recentTasks = [
    {
      id: 1,
      title: "Design new landing page",
      project: "Website Redesign",
      priority: "High",
      due: "Mar 22",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Fix authentication bug",
      project: "Platform",
      priority: "Critical",
      due: "Mar 20",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Update API documentation",
      project: "Docs",
      priority: "Medium",
      due: "Mar 25",
      status: "Todo",
    },
    {
      id: 4,
      title: "Review pull requests",
      project: "Platform",
      priority: "Low",
      due: "Mar 23",
      status: "Todo",
    },
  ];

  const projects = [
    { name: "Website Redesign", tasks: 12, completed: 8, progress: 67 },
    { name: "Platform", tasks: 18, completed: 10, progress: 56 },
    { name: "Mobile App", tasks: 15, completed: 12, progress: 80 },
    { name: "Docs", tasks: 8, completed: 6, progress: 75 },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "text-red-600 bg-red-100";
      case "High":
        return "text-orange-600 bg-orange-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "Low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Todo":
        return "bg-gray-100 text-gray-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-slate-600">
          Here&apos;s your task management overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tasks */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Recent Tasks
              </h2>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All →
              </a>
            </div>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-slate-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {task.title}
                      </h3>
                      <p className="text-sm text-slate-600">{task.project}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                        Due: {task.due}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Overview */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 text-sm">
                      {project.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-600">
                      {project.completed}/{project.tasks}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    {project.progress}% Complete
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
