"use client";

import { Eye, EyeClosed } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      if (res.data.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      // Handle errors properly this time
      let message = "An unexpected error occured";

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        message =
          error.response?.data?.error ||
          (status === 401 ? "Incorrect email or password." : "Server error.");

        // If there's a network error, display this if request was made but no response
        if (!error.response) {
          message = "Network error! Please check your connection.";
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      setError(message);
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
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-[13px] text-[#7a7a7a]">
            Sign in to your workspace
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email INput */}
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

          {/* Sign In Button */}

          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "opacity-50 cursor-not-allowed" : ""} w-full text-md bg-[#d5ff45] hover:bg-[#c6f036] text-black font-semibold rounded-xl py-3 transition-colors duration-200`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl p-3">
              {error}
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-[14px] text-[#7a7a7a]">
          No account?{" "}
          <Link
            href="/sign-up"
            className="text-[#d5ff45] font-medium hover:underline transition-all"
          >
            Create one
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="grow border-t border-[#2e2e2e]"></div>
          <span className="mx-4 text-sm text-[#7a7a7a]">or</span>
          <div className="grow border-t border-[#2e2e2e]"></div>
        </div>

        {/* Google & Apple Sign-In coming soon */}
        <div className="text-sm text-center text-[#7a7a7a]">
          OAuth / Google coming soon
        </div>
      </div>
    </div>
  );
};

export default SignIn;
