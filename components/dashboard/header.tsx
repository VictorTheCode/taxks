"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [firstName, setFirstName] = useState("User");
  // We calculate time directly during render instead of effect to prevent cascading renders.
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";
  useEffect(() => {
    // Fetch the current session user data
    const fetchUser = async () => {
      try {
        const response = await axios("/api/me");

        if (response.data.success && response.data.name) {
          // Get the first name by splitting the full name
          setFirstName(response.data.name.split(" ")[0]);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 mt-2 space-y-5 font-sans items-center justify-between border-b border-white/10 bg-[#0a0a1a]/80 px-4 backdrop-blur-xl sm:h-16 sm:px-6 lg:px-8">
      <div>
        <div>
          <h2 className="text-lg font-bold" suppressHydrationWarning>
            Good {timeOfDay}, {firstName}
          </h2>
        </div>
      </div>
    </header>
  );
}
