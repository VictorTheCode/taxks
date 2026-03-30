import {
  Bot,
  Folder,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
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
            <div className="flex items-center lg:py-4 justify-start">
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

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Workspace
          </h3>

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex gap-3 rounded-lg px-3 py-4 transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/2 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t border-white/10 px-3 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-white/10"></div>
              <span className="text-xs">User Name</span>
            </div>
            <button className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
