import { motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/5 backdrop-blur-sm bg-[#0a0a0a]/80"
    >
      <span className="text-lg font-semibold tracking-tight">Taxks</span>
      <div className="flex items-center gap-6">
        <Link
          href="/login"
          className="text-sm text-white/50 hover:text-white transition-colors duration-200"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="text-sm bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-white/90 transition-colors duration-200"
        >
          Get started
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
