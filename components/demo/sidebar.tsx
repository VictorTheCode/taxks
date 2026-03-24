import {
  Bot,
  CheckSquare,
  LayoutDashboard,
  User2Icon,
  Workflow,
} from "lucide-react";

const DemoSidebar = () => {
  return (
    <aside className="w-44 h-full border-r border-white/5 bg-[#111] flex flex-col py-4 shrink-0">
      <div className="px-4 mb-5 text-sm font-bold text-gray-300 tracking-tight">
        Taxks<span className="text-[#c8f060] ml-[0.9]">.</span>
      </div>
      {[
        { icon: <LayoutDashboard />, label: "Dashboard" },
        { icon: <CheckSquare />, label: "Tasks", active: true },
        { icon: <Workflow />, label: "Projects" },
        { icon: <Bot />, label: "AI Features" },
      ].map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-2 px-4 py-2 text-xs cursor-default relative
                    ${item.active ? "text-white" : "text-white/35"}`}
        >
          {item.active && (
            <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-[#c8f060] rounded-r" />
          )}
          <span className="opacity-60 text-xs">{item.icon}</span>
          {item.label}
        </div>
      ))}
      <div className="mt-auto px-4 pt-4 border-t border-white/5">
        <div className="flex items-center space-x-5">
          <div className="w-6 h-6  rounded-full bg-[#c8f060]/10 border border-[#c8f060]/30 flex items-center justify-center text-[10px] font-bold text-[#c8f060]">
            <User2Icon className="w-3 h-3 text-center" />
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <div className="text-xs font-semibold leading-none mb-0.5">
              User
            </div>
            <div className="text-[10px] text-white/30 font-mono">Free</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DemoSidebar;
