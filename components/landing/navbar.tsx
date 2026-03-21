// import { motion } from "motion/react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -16 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/5 backdrop-blur-sm bg-[#0a0a0a]/80"
//     >
//       <span className="text-lg font-semibold tracking-tight">Taxks</span>
//       <div className="flex items-center gap-6">
//         <Link
//           href="/sign-in"
//           className="text-sm text-white/50 hover:text-white transition-colors duration-200"
//         >
//           Sign in
//         </Link>
//         <Link
//           href="/sign-up"
//           className="text-sm bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-white/90 transition-colors duration-200"
//         >
//           Get started
//         </Link>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl flex items-center justify-between px-6 py-3 
                   rounded-full border border-white/[0.08] 
                   bg-[#0d0e15]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-[#c8f060] group-hover:scale-150 transition-transform" />
          <span className="text-sm font-bold tracking-tighter uppercase">
            Taxks
          </span>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/sign-in"
            className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-[#c8f060] transition-colors"
          >
            Auth // Login
          </Link>
          <Link
            href="/sign-up"
            className="text-xs font-bold uppercase tracking-widest bg-[#c8f060] text-black px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(200,240,96,0.3)] transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
