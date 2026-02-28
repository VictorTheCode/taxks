import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-b-gray-200 bg-white/50 backdrop-blur-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Taxks</div>
          <div className="space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
