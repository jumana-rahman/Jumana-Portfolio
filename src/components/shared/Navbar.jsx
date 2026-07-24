import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ✅ Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // ✅ Save theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let current = "home";

      sections.forEach((section, i) => {
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            current = navLinks[i].name.toLowerCase();
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition duration-300 ${
        theme === "dark"
          ? "bg-black/60 border-purple-500/20"
          : "bg-white/70 border-purple-300/40"
      }`}
    >
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
              className={`transition duration-300 relative ${
                theme === "dark"
                  ? "text-gray-300 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              } ${
                active === link.name.toLowerCase()
                  ? "text-purple-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-500"
                  : ""
              }`}
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
            {theme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden flex flex-col items-center gap-4 ${
              theme === "dark"
                ? "bg-black/90 text-gray-300"
                : "bg-white text-gray-700"
            }`}
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`hover:text-purple-400 transition ${
                    active === link.name.toLowerCase()
                      ? "text-purple-400 font-semibold"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                    setOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}