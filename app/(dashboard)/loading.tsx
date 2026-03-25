import React from "react";

const DashboardLoading = () => {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-8 w-48  bg-white/5 rounded mb-8" />
      <div className="grid grid-cols-4 gap-2 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-white/5 rounded-xl" />
        ))}
      </div>
    </div>
  );
};

export default DashboardLoading;
