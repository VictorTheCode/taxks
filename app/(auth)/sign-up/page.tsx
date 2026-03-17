"use client";

import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="w-full bg-[#121212] border border-[#242424] rounded-2xl p-8 sm:p-10">
        {/* Logo */}
        <h1 className="text-3xl font-black text-white tracking-wide mb-10">
          Taxks<span className="text-[#d5ff45]">.</span>
        </h1>

        {/* Headings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Create account</h2>
          <p className="text-[15px] text-[#7a7a7a]">
            Start organizing your work with AI
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Full Name Input */}
          <div>
            <label className="block text-[11px] font-mono text-[#666666] tracking-widest uppercase mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Samuel Adeyemi"
              className="w-full bg-[#171717] border border-[#2e2e2e] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#555555] focus:ring-1 focus:ring-[#555555] transition-colors placeholder:text-[#4a4a4a]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-[11px] font-mono text-[#666666] tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#171717] border border-[#2e2e2e] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#555555] focus:ring-1 focus:ring-[#555555] transition-colors placeholder:text-[#4a4a4a]"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-[11px] font-mono text-[#666666] tracking-widest uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="w-full bg-[#171717] border border-[#2e2e2e] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#555555] focus:ring-1 focus:ring-[#555555] transition-colors placeholder:text-[#4a4a4a]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#d5ff45] hover:bg-[#c6f036] text-black font-semibold rounded-xl py-3.5 mt-2 transition-colors duration-200"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-[14px] text-[#7a7a7a]">
          Already have an account?{" "}
          <a
            href="#"
            className="text-[#d5ff45] font-medium hover:underline transition-all"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
