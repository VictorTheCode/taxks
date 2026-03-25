import {
  Bot,
  Folder,
  LayoutDashboard,
  ListTodo,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { href: "/tasks", label: "Tasks", icon: <ListTodo /> },
  { href: "/projects", label: "Projects", icon: <Folder /> },
  { href: "/features", label: "AI Features", icon: <Bot /> },
  { href: "/settings", label: "Settings", icon: <Settings /> },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-white/10 bg-[#0a0a1a]/95 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navigation */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-start">
              <Link href={"/"} className="text-2xl font-bold">
                Taxks
              </Link>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-"></nav>
      </aside>

      {/* Desktop Sidebar */}
    </div>
  );
};

export default Sidebar;
