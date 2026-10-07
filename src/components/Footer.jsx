import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`py-8 px-6 border-t text-sm transition-colors duration-300 ${darkMode ? "bg-[#070a12] border-slate-800/80 text-slate-300" : "bg-[#F7F7FA] border-[#E6E1F5] text-[#171721]"
      }`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <div className="flex items-center gap-3">
          <p className={`font-medium ${darkMode ? "text-slate-400" : "text-[#626274]"}`}>
            © {new Date().getFullYear()} Gaurav Singh. All rights reserved.
          </p>
        </div>

        {/* Links & Circular Back to Top Button */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/gauravsinghcodes"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors flex items-center gap-1.5 text-xs font-semibold ${darkMode ? "text-slate-300 hover:text-violet-400" : "text-[#626274] hover:text-[#7C3AED]"
              }`}
          >
            <GithubIcon className={`w-4 h-4 ${darkMode ? "text-slate-300" : "text-[#626274]"}`} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav-singh-b3b3b7324/"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors flex items-center gap-1.5 text-xs font-semibold ${darkMode ? "text-slate-300 hover:text-violet-400" : "text-[#626274] hover:text-[#7C3AED]"
              }`}
          >
            <LinkedinIcon className={`w-4 h-4 ${darkMode ? "text-slate-300" : "text-[#626274]"}`} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/gaurav_singh_1615/"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors flex items-center gap-1.5 text-xs font-semibold ${darkMode ? "text-slate-300 hover:text-violet-400" : "text-[#626274] hover:text-[#7C3AED]"
              }`}
          >
            <InstagramIcon className={`w-4 h-4 ${darkMode ? "text-slate-300" : "text-[#626274]"}`} />
            <span>Instagram</span>
          </a>

          {/* Circular Arrow-Only Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white border border-white/30 dark:border-violet-400/30 backdrop-blur-md flex items-center justify-center shadow-[0_6px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.55)] transition-all duration-300 active:scale-95 shrink-0"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
