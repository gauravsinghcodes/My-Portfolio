import { useState } from "react";
import { Menu, X, ExternalLink, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const resumeUrl = "https://drive.google.com/file/d/1mZH7eMib8UF9LvaM5Z45BQ4PjgHsrigB/view?usp=drive_link";

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? "bg-[#0e0e17]/80 border-violet-950/60 text-[#F8FAFC]" : "bg-[#F7F7FA]/85 border-[#E6E1F5] text-[#171721]"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Website Logo & Brand Name */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src="/GS-logo.svg"
            alt="GS Logo"
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <span className={`text-base font-extrabold tracking-tight transition-colors ${darkMode ? "text-white group-hover:text-[#A78BFA]" : "text-[#171721] group-hover:text-[#7C3AED]"
            }`}>
            Gaurav Singh
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${darkMode ? "text-slate-300 hover:text-[#A78BFA]" : "text-[#626274] hover:text-[#7C3AED]"
                }`}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all active:scale-95 border ${darkMode
                ? "bg-slate-800/80 border-slate-700 text-amber-400 hover:bg-slate-700"
                : "bg-white border-[#E6E1F5] text-[#626274] hover:text-[#7C3AED] hover:bg-[#F1EDFF] shadow-2xs"
              }`}
            aria-label="Toggle theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Button */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white border border-white/30 dark:border-violet-400/30 backdrop-blur-md shadow-[0_8px_25px_rgba(139,92,246,0.35)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center gap-1.5 active:scale-95"
          >
            <span>Resume</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Right Controls: Theme Toggle + Menu Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all ${darkMode
                ? "bg-slate-800 border-slate-700 text-amber-400"
                : "bg-white border-[#E6E1F5] text-[#626274] shadow-2xs"
              }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${darkMode ? "text-slate-300 hover:bg-slate-800" : "text-[#626274] hover:bg-[#F1EDFF]"
              }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 py-4 space-y-3 shadow-lg ${darkMode ? "bg-[#0e0e17] border-slate-800" : "bg-[#F7F7FA] border-[#E6E1F5]"
          }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1 text-sm font-bold transition-colors ${darkMode ? "text-slate-200 hover:text-[#A78BFA]" : "text-[#171721] hover:text-[#7C3AED]"
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 text-[#7C3AED] font-extrabold text-sm pt-2"
          >
            <span>View Resume</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;