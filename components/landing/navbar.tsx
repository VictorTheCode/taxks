"use client";

import useUser from "@/hooks/use-user";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // check logged in user
  const { user, loading, mutate } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    mutate(null);
    router.push("/");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-100 flex justify-center p-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl flex items-center justify-between px-6 py-3 
                   rounded-full border border-white/8 
                   bg-[#0d0e15]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
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
          {loading ? null : user ? (
            // Authenticated state
            <>
              <Link
                href="/dashboard"
                className="text-xs font-mono uppercase tracking-widest text-foreground/40 hover:text-[#c8f060] transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
