import FeatureCard from "@/components/feature-card";
import Navbar from "@/components/navbar";
import Step from "@/components/step";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section - you'll learn to make this dynamic with data fetching */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
            Welcome to Taxks
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your AI-Powered Task Management app for all your needs. We use
            Artificial Intelligence to help you organize, plan tasks, and
            prioritize your needs efficiently.
          </p>

          {/* CTA Buttons - you'll connect these to auth flow */}
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition text-lg font-semibold"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - you'll make this dynamic from CMS/database */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Taxks?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Powered Prioritization"
              description="Our AI analyzes your tasks and deadlines to suggest what to work on first"
              icon="🤖"
            />
            <FeatureCard
              title="Smart Scheduling"
              description="Automatically find the best time slots for your tasks based on your habits"
              icon="📅"
            />
            <FeatureCard
              title="Predictive Analytics"
              description="Get insights on your productivity patterns and future task completion times"
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* How It Works - you'll implement the actual AI logic here */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Step number={1} text="Add your tasks naturally" />
            <div className="text-2xl text-gray-400">→</div>
            <Step number={2} text="AI analyzes and organizes" />
            <div className="text-2xl text-gray-400">→</div>
            <Step number={3} text="Get your smart schedule" />
          </div>
        </div>
      </section>

      {/* Footer - will become a separate component */}
      <footer className="border-t border-t-gray-200 py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2026 Taxks.</p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
