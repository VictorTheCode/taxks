"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/2 bg-[#0d0e15]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black uppercase tracking-tighter">
              Taxks
            </span>
            <span className="text-[10px] font-mono text-white/20 border border-white/10 px-1.5 py-0.5 rounded">
              v1.0
            </span>
          </div>
          <p className="text-xs text-white/30 max-w-[200px] leading-relaxed font-mono">
            AI-powered Task manager built for efficiency and productivity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2">
              Product
            </span>
            <Link
              href="/demo"
              className="text-xs text-white/40 hover:text-[#c8f060] transition-colors"
            >
              View Demo
            </Link>
            <Link
              href="/docs"
              className="text-xs text-white/40 hover:text-[#c8f060] transition-colors"
            >
              Documentation
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2">
              Social
            </span>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-[#c8f060] transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-[#c8f060] transition-colors"
            >
              X / Twitter
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 flex justify-between items-center border-t border-white/[0.03] pt-8">
        <p className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
          © 2026 Taxks. All Rights Reserved
        </p>
        <div className="flex gap-4 text-[10px] font-mono text-white/50">
          <span>Built with ❤️ by vinxxin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
