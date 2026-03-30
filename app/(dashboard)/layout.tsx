"use client";
import DashboardHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-1 flex-col lg:ml-64">
          <DashboardHeader
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
