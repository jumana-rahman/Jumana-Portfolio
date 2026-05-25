import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // ✅ initialize theme once
  useEffect(() => {
    const savedTheme =
      document.documentElement.getAttribute("data-theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // ✅ toggle theme properly
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-purple-400 tracking-wide">
          Jumana
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-300 hover:text-purple-400 transition duration-300 hover:drop-shadow-[0_0_10px_#a855f7]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition"
          >
            {theme === "dark" ? (
              <FiMoon size={16} />
            ) : (
              <FiSun size={16} />
            )}
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden text-purple-400 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-black/90">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-300 hover:text-purple-400"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}