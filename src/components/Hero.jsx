import profileImage from "../assets/gaurav.jpg";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { darkMode } = useTheme();
  const linkedinUrl = "https://www.linkedin.com/in/gaurav-singh-b3b3b7324/";
  const githubUrl = "https://github.com/gauravsinghcodes";
  const instagramUrl = "https://www.instagram.com/gaurav_singh_1615/";

  return (
    <section id="home" className={`min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-16 px-6 border-b transition-colors duration-300 ${darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
      }`}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-left">

          {/* Main Title */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-[#171721]"
            }`}>
            Hi, I'm <span>Gaurav Singh</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl ${darkMode ? "text-slate-300" : "text-[#626274]"
            }`}>
            I'm a Full Stack Web Developer and Software Engineer specializing in scalable web applications with React, Next.js, Node.js, Express, Flask, PostgreSQL, and MongoDB.
          </p>

          {/* Roles Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["MERN Stack", "PERN Stack", "Full-Stack Dev"].map((role) => (
              <span
                key={role}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-colors shadow-2xs ${darkMode
                  ? "bg-slate-800/80 border border-slate-700 text-slate-200 hover:border-violet-500 hover:text-violet-300"
                  : "bg-white/90 border border-[#E6E1F5] text-[#171721] hover:border-[#A78BFA] hover:bg-[#F1EDFF] hover:text-[#7C3AED]"
                  }`}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white font-medium text-sm border border-white/30 dark:border-violet-400/30 backdrop-blur-md shadow-[0_8px_25px_rgba(139,92,246,0.35)] hover:shadow-[0_12px_32px_rgba(139,92,246,0.55)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-3.5 rounded-full border transition-all flex items-center justify-center shrink-0 shadow-2xs active:scale-95 ${darkMode
                  ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-violet-300"
                  : "bg-white/90 border-[#E6E1F5] text-[#626274] hover:bg-[#F1EDFF] hover:border-[#A78BFA] hover:text-[#7C3AED]"
                  }`}
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-3.5 rounded-full border transition-all flex items-center justify-center shrink-0 shadow-2xs active:scale-95 ${darkMode
                  ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-violet-300"
                  : "bg-white/90 border-[#E6E1F5] text-[#626274] hover:bg-[#F1EDFF] hover:border-[#A78BFA] hover:text-[#7C3AED]"
                  }`}
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-3.5 rounded-full border transition-all flex items-center justify-center shrink-0 shadow-2xs active:scale-95 ${darkMode
                  ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-violet-300"
                  : "bg-white/90 border-[#E6E1F5] text-[#626274] hover:bg-[#F1EDFF] hover:border-[#A78BFA] hover:text-[#7C3AED]"
                  }`}
                title="Instagram Profile"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image Card Container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className={`p-1 rounded-full border transition-colors ${darkMode
            ? "bg-slate-800/90 border-violet-500/40 shadow-xl shadow-purple-950/40"
            : "bg-white/90 border-[#E6E1F5] shadow-sm"
            }`}>
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-slate-900/10">
              <img
                src={profileImage}
                alt="Gaurav Singh"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;