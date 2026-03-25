"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <p className="text-red-400 mb-4">
        Something went wrong loading your dashboard.
      </p>
      <button
        onClick={reset}
        className="text-sm text-white/50 hover:text-white"
      >
        Try again
      </button>
    </div>
  );
}
