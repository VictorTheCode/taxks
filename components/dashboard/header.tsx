import { HeaderProps } from "@/types";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/tasks": "Tasks",
  "/projects": "Projects",
  "/features": "Features",
  "/settings": "Settings",
};

export default function DashboardHeader({ onToggleSidebar }: HeaderProps) {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";
  return (
    <header className="sticky top-0 z-30 flex h-14 mt-2 space-y-5 font-sans items-center justify-between border-b border-white/10 bg-[#0a0a1a]/80 px-4 backdrop-blur-xl sm:h-16 sm:px-6 lg:px-8">
      <div>
        <button
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-bold text-white sm:text-xl">{title}</h2>
      </div>
    </header>
  );
}
