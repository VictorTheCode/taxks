"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl flex items-center justify-between px-6 py-3 
                   rounded-full border border-black/5 dark:border-white/[0.08] 
                   bg-white/40 dark:bg-[#0d0e15]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center gap-2.5 group">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#c8f060] rounded-md group-hover:shadow-[0_0_12px_rgba(200,240,96,0.4)] transition-shadow" />
            <CheckSquare className="relative w-3.5 h-3.5 text-black stroke-[2.5]" />
          </div>
          <span className="text-sm font-bold tracking-wide uppercase text-foreground">
            Taxks
          </span>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/sign-in"
            className="text-xs font-mono uppercase tracking-widest text-foreground/40 hover:text-[#c8f060] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="text-xs font-bold uppercase tracking-widest bg-[#c8f060] text-black px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(200,240,96,0.3)] transition-all active:scale-95"
          >
            Get Started
          </Link>
          <ThemeToggle />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
