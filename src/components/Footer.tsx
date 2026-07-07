import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                MenuMagic
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Discover and order from the best local restaurants. Fresh food,
              fast delivery, right to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm w-fit"
              >
                Home
              </Link>
              <Link
                to="/order-status"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm w-fit"
              >
                Order Status
              </Link>
              <Link
                to="/user-profile"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm w-fit"
              >
                My Profile
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">
              Legal
            </h3>
            <nav className="flex flex-col gap-2">
              <span className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm cursor-pointer w-fit">
                Privacy Policy
              </span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm cursor-pointer w-fit">
                Terms of Service
              </span>
              <span className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm cursor-pointer w-fit">
                Cookie Policy
              </span>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MenuMagic. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">Made with</span>
            <span className="text-violet-500 text-sm">❤</span>
            <span className="text-gray-500 text-sm">for food lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;