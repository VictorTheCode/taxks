"use client";

import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  desc: string;
  project: string;
  priority: "high" | "med" | "low";
  due: string;
  status: "todo" | "inprogress" | "done";
  done: boolean;
  overdue: boolean;
  ai: boolean;
}

/* eslint-disable react/no-unescaped-entities */
const Demo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Set up Prisma schema",
      desc: "Define User, Project, Task models with proper relations",
      project: "Taxks App",
      priority: "high",
      due: "2026-03-02",
      status: "inprogress",
      done: false,
      overdue: true,
      ai: false,
    },
    {
      id: 2,
      title: "Build auth API endpoints",
      desc: "Register, login, logout with JWT cookie-based auth",
      project: "Taxks App",
      priority: "high",
      due: "2026-03-05",
      status: "todo",
      done: false,
      overdue: false,
      ai: true,
    },
    {
      id: 3,
      title: "Configure Neon database",
      desc: "",
      project: "Taxks App",
      priority: "high",
      due: "2026-03-01",
      status: "done",
      done: true,
      overdue: false,
      ai: false,
    },
    {
      id: 4,
      title: "Design landing page hero",
      desc: "",
      project: "Portfolio",
      priority: "med",
      due: "2026-03-06",
      status: "todo",
      done: false,
      overdue: false,
      ai: false,
    },
    {
      id: 5,
      title: "Implement rate limiting",
      desc: "In-memory approach first, then Redis later",
      project: "Taxks App",
      priority: "med",
      due: "2026-03-08",
      status: "todo",
      done: false,
      overdue: false,
      ai: true,
    },
    {
      id: 6,
      title: "Push portfolio to Vercel",
      desc: "",
      project: "Portfolio",
      priority: "low",
      due: "2026-03-07",
      status: "todo",
      done: false,
      overdue: false,
      ai: false,
    },
    {
      id: 7,
      title: "Client onboarding doc",
      desc: "",
      project: "Client Work",
      priority: "high",
      due: "2026-03-03",
      status: "inprogress",
      done: false,
      overdue: true,
      ai: false,
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState<
    "all" | "active" | "done" | "overdue"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputProject, setInputProject] = useState("Portfolio Site");
  const [inputPriority, setInputPriority] = useState("High");
  const [inputDue, setInputDue] = useState("");
  const [inputStatus, setInputStatus] = useState("todo");

  const projectColors: Record<string, string> = {
    Portfolio: "#60a8f0",
    "Taxks App": "#c8f060",
    "Client Work": "#f06060",
  };

  const getFiltered = () => {
    let list = [...tasks];
    if (currentFilter === "active") list = list.filter((t) => !t.done);
    if (currentFilter === "done") list = list.filter((t) => t.done);
    if (currentFilter === "overdue")
      list = list.filter((t) => t.overdue && !t.done);
    if (searchQuery)
      list = list.filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return list;
  };

  const handleFilterTab = (type: "all" | "active" | "done" | "overdue") => {
    setCurrentFilter(type);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateTask = () => {
    if (!inputTitle.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: inputTitle,
      desc: inputDesc,
      project: inputProject,
      priority: (inputPriority.toLowerCase() === "high"
        ? "high"
        : inputPriority.toLowerCase() === "med"
          ? "med"
          : "low") as "high" | "med" | "low",
      due: inputDue,
      status: inputStatus as "todo" | "inprogress" | "done",
      done: false,
      overdue: false,
      ai: false,
    };
    setTasks([newTask, ...tasks]);
    setInputTitle("");
    setInputDesc("");
    setInputProject("Portfolio Site");
    setInputPriority("High");
    setInputDue("");
    setInputStatus("todo");
    handleCloseModal();
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const fmtDate = (d: string) => {
    if (!d) return "";
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  const filtered = getFiltered();

  return (
    <div className="shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          Taxks<em>.</em>
        </div>

        <div className="nav-section">
          <div className="nav-label">Menu</div>
          <div className="nav-item active">
            <span className="nav-icon">◈</span> Dashboard
          </div>
          <div className="nav-item">
            <span className="nav-icon">◻</span> All Tasks
          </div>
          <div className="nav-item">
            <span className="nav-icon">⬡</span> Projects
          </div>
          <div className="nav-item">
            <span className="nav-icon">✦</span> AI Features
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-label">Projects</div>
          <div className="nav-item">
            <div
              className="project-dot"
              style={{ background: "#6eb5ff" }}
            ></div>{" "}
            Portfolio Site
          </div>
          <div className="nav-item">
            <div
              className="project-dot"
              style={{ background: "#d4f064" }}
            ></div>{" "}
            Taxks App
          </div>
          <div className="nav-item">
            <div
              className="project-dot"
              style={{ background: "#ff5f5f" }}
            ></div>{" "}
            Client Work
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="user-row">
            <div className="avatar">S</div>
            <div>
              <div className="user-name">Samuel A.</div>
              <div className="user-role">Free plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-left">
            <div className="page-title">Tasks</div>
            <div className="task-count" id="task-count">
              {filtered.length} task{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="topbar-right">
            <button className="btn primary" onClick={handleOpenModal}>
              + New Task
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="tabs">
            <div
              className={`tab ${currentFilter === "all" ? "active" : ""}`}
              onClick={() => handleFilterTab("all")}
            >
              All
            </div>
            <div
              className={`tab ${currentFilter === "active" ? "active" : ""}`}
              onClick={() => handleFilterTab("active")}
            >
              Active
            </div>
            <div
              className={`tab ${currentFilter === "done" ? "active" : ""}`}
              onClick={() => handleFilterTab("done")}
            >
              Done
            </div>
            <div
              className={`tab ${currentFilter === "overdue" ? "active" : ""}`}
              onClick={() => handleFilterTab("overdue")}
            >
              Overdue
            </div>
          </div>
          <div className="toolbar-right">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Content - List View */}
        <div className="content">
          <div style={{ width: "100%" }}>
            <div className="list-header">
              <div style={{ width: "32px" }}></div>
              <div className="list-col-head">Title</div>
              <div className="list-col-head">Project</div>
              <div className="list-col-head">Priority</div>
              <div className="list-col-head">Due Date</div>
              <div className="list-col-head">Actions</div>
            </div>
            <div id="list-body">
              {filtered.length === 0 ? (
                <div className="empty-state">
                  <div
                    style={{
                      fontSize: "28px",
                      opacity: 0.3,
                      marginBottom: "10px",
                    }}
                  >
                    ◻
                  </div>
                  No tasks here.
                </div>
              ) : (
                filtered.map((t) => (
                  <div
                    key={t.id}
                    className="list-row"
                    style={{ opacity: t.done ? 0.45 : 1 }}
                  >
                    <div>
                      <button
                        className={`check ${t.done ? "checked" : ""}`}
                        onClick={() => handleToggleTask(t.id)}
                      >
                        {t.done && "✓"}
                      </button>
                    </div>
                    <div>
                      <div
                        className="list-title"
                        style={{
                          textDecoration: t.done ? "line-through" : "none",
                        }}
                      >
                        {t.title}
                      </div>
                      {t.ai && <span className="tag-ai">✦ AI</span>}
                    </div>
                    <div className="list-project">
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span
                          className="project-indicator"
                          style={{
                            background: projectColors[t.project] || "#666",
                          }}
                        ></span>
                        {t.project}
                      </span>
                    </div>
                    <div>
                      <span className={`tag tag-${t.priority}`}>
                        {t.priority === "high"
                          ? "High"
                          : t.priority === "med"
                            ? "Med"
                            : "Low"}
                      </span>
                    </div>
                    <div
                      className={`list-due ${t.overdue && !t.done ? "overdue" : ""}`}
                    >
                      {t.overdue && !t.done ? "⚠ " : ""}
                      {fmtDate(t.due)}
                    </div>
                    <div className="list-actions">
                      <button
                        className="icon-btn"
                        onClick={() => handleToggleTask(t.id)}
                      >
                        {t.done ? "Active" : "Done"}
                      </button>
                      <button
                        className="icon-btn-del"
                        onClick={() => handleDeleteTask(t.id)}
                      >
                        Del
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="modal">
            <div className="modal-head">
              <div className="modal-title">New Task</div>
              <div className="modal-sub">
                Add a task manually or use AI to parse natural language
              </div>
            </div>

            <div className="field">
              <label>TITLE</label>
              <input
                type="text"
                placeholder="What needs to be done?"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </div>
            <div className="field">
              <label>DESCRIPTION</label>
              <textarea
                placeholder="Optional details..."
                value={inputDesc}
                onChange={(e) => setInputDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="two-col">
              <div className="field">
                <label>PROJECT</label>
                <select
                  value={inputProject}
                  onChange={(e) => setInputProject(e.target.value)}
                >
                  <option>Portfolio Site</option>
                  <option>Taxks App</option>
                  <option>Client Work</option>
                </select>
              </div>
              <div className="field">
                <label>PRIORITY</label>
                <select
                  value={inputPriority}
                  onChange={(e) => setInputPriority(e.target.value)}
                >
                  <option>High</option>
                  <option>Med</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>DUE DATE</label>
              <input
                type="date"
                value={inputDue}
                onChange={(e) => setInputDue(e.target.value)}
              />
            </div>
            <div className="field">
              <label>STATUS</label>
              <select
                value={inputStatus}
                onChange={(e) => setInputStatus(e.target.value)}
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="ai-pill">✦ AI suggest priority from title</div>

            <div className="modal-footer">
              <button className="btn-ghost" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="btn primary" onClick={handleCreateTask}>
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
