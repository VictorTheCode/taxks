"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Registration failed");
      }

      // Success - redirect to sign-in
      router.push("/sign-in");
    } catch (error) {
      // Handle error properly without console.log
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="flex-4 max-w-lg bg-[#121212] border border-[#242424] rounded-2xl p-8 sm:p-10">
        {/* Logo */}
        <h1 className="font-grotesk-bold text-4xl text-white tracking-wide mb-10">
          Taxks<span className="text-(--color-accent)">.</span>
        </h1>

        {/* Headings */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create account</h2>
          <p className="text-[13px] text-[#7a7a7a]">
            Start organizing your work with AI
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input */}
          <div>
            <label className="block text-[11px] font-mono text-[#666666] tracking-widest uppercase mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                className="w-full bg-[#171717] border border-[#2e2e2e] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#555555] focus:ring-1 focus:ring-[#555555] transition-colors placeholder:text-[#4a4a4a] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a7a7a] hover:text-white transition-colors"
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeClosed className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          {loading ? (
            <div className="w-full bg-[#d5ff45] opacity-20 text-black font-semibold rounded-xl py-3.5 mt-2 flex items-center justify-center">
              Creating account...
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-[#d5ff45] hover:bg-[#c6f036] text-black font-semibold rounded-xl py-3.5 mt-2 transition-colors duration-200"
            >
              Create account
            </button>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl p-3">
              {error}
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-[14px] text-[#7a7a7a]">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-[#d5ff45] font-medium hover:underline transition-all"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
