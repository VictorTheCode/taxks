"use client";

import Link from "next/link";
import React from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { PageReveal } from "@/components/animations";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageReveal>
      <div className="min-h-screen bg-[#0d0e15] text-white selection:bg-[#c8f060]/30">
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 border-b border-white/[0.02] bg-[#0d0e15]/50 backdrop-blur-md">
          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-[#c8f060] transition-colors"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Documentation</span>
            </Link>
            <div className="h-4 w-px bg-white/10" />
            {/* <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            v1
          </span> */}
          </div>
        </header>

        <main className="flex min-h-screen items-center justify-center px-4 pt-16">
          {/* background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c8f060]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="w-full max-w-md relative z-10">{children}</div>
        </main>
      </div>
    </PageReveal>
  );
};

export default AuthLayout;
