import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import chatImg from "../assets/chat.png";
import projectMgtImg from "../assets/project-mgt.png";
import bookImg from "../assets/book.png";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { darkMode } = useTheme();

  const projects = [
    {
      id: "realtime-chat",
      title: "Real-Time Group Chat App",
      category: "Real-Time",
      image: chatImg,
      description: "A real-time group chat application built with React and Socket.io featuring persistent message history, dynamic room management, and WhatsApp-inspired responsive UI.",
      tech: ["React", "Tailwind CSS", "Node.js", "Socket.IO"],
      github: "https://github.com/gauravsinghcodes/Group-Chatt",
      demo: "https://group-chatt-eta.vercel.app"
    },
    {
      id: "project-management",
      title: "Project Management Platform",
      category: "Full-Stack",
      image: projectMgtImg,
      description: "Multi-workspace collaboration system built with React, Redux, Node.js/Express, & PostgreSQL (Prisma + Neon). Supports role-based access, task tracking, and Clerk authentication.",
      tech: ["React", "Redux", "Node.js", "PostgreSQL", "Clerk"],
      github: "https://github.com/gauravsinghcodes/Project-Management",
      demo: "https://project-management-ten-neon.vercel.app"
    },
    {
      id: "bookified",
      title: "Bookified - AI Voice Companion",
      category: "Full-Stack & AI",
      image: bookImg,
      description: "AI voice-powered platform turning PDFs into interactive conversational companions. Upload books, ask voice questions, and receive AI insights powered by Vapi AI.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Vapi AI", "Clerk"],
      github: "https://github.com/gauravsinghcodes/bookified",
      demo: "https://www.linkedin.com/posts/gaurav-singh-b3b3b7324_ai-nextjs-webdevelopment-ugcPost-7438632160908980224-COCO"
    }
  ];

  const categories = ["All", "Full-Stack", "Full-Stack & AI", "Real-Time"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category.includes(activeCategory) || activeCategory.includes(p.category));

  return (
    <section id="projects" className={`py-16 md:py-24 px-6 border-b transition-colors duration-300 ${
      darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className={`text-3xl font-extrabold mb-2 ${
              darkMode ? "text-white" : "text-[#171721]"
            }`}>Projects Showcase</h2>
            <p className={`text-sm font-medium ${
              darkMode ? "text-slate-400" : "text-[#626274]"
            }`}>Explore my full-stack projects, AI tools, and web applications</p>
          </div>
          
          <div className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border shadow-2xs ${
            darkMode ? "bg-slate-800 text-slate-300 border-slate-700" : "bg-white/90 text-[#626274] border-[#E6E1F5]"
          }`}>
            {filteredProjects.length} Projects
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 text-white border border-white/30 dark:border-violet-400/30 backdrop-blur-md shadow-[0_6px_20px_rgba(139,92,246,0.35)]"
                  : darkMode
                    ? "bg-slate-800/80 text-slate-300 hover:bg-purple-900/30 hover:text-purple-300 border border-slate-700"
                    : "bg-white/80 text-[#626274] hover:bg-[#F1EDFF] hover:text-[#7C3AED] border border-[#E6E1F5] shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-3xl p-5 flex flex-col justify-between space-y-4 transition-all overflow-hidden group ${
                darkMode
                  ? "bg-slate-800/90 border-slate-700/80 hover:border-violet-500 hover:shadow-xl hover:shadow-purple-950/30"
                  : "bg-white/90 border-[#E6E1F5] shadow-xs hover:border-[#A78BFA]"
              }`}
            >
              <div className="space-y-3">
                {/* Project Image Preview */}
                {project.image && (
                  <div className={`w-full h-44 rounded-2xl overflow-hidden border mb-3 ${
                    darkMode ? "border-slate-700 bg-slate-900" : "border-[#E6E1F5] bg-slate-100"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full border ${
                  darkMode
                    ? "bg-purple-950/50 text-purple-300 border-purple-800/60"
                    : "bg-[#F1EDFF] text-[#7C3AED] border-[#E6E1F5]"
                }`}>
                  {project.category}
                </span>

                <h3 className={`text-lg font-bold leading-snug ${
                  darkMode ? "text-white" : "text-[#171721]"
                }`}>
                  {project.title}
                </h3>

                <p className={`text-xs sm:text-sm font-normal leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-[#626274]"
                }`}>
                  {project.description}
                </p>
              </div>

              <div className={`pt-4 border-t space-y-4 ${
                darkMode ? "border-slate-700/80" : "border-[#E6E1F5]"
              }`}>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                        darkMode
                          ? "bg-slate-900/60 text-slate-200 border-slate-700/80 hover:bg-violet-900/40 hover:text-violet-300"
                          : "bg-white/80 text-[#171721] border-[#E6E1F5] hover:bg-[#F1EDFF] hover:text-[#7C3AED]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      darkMode ? "text-slate-300 hover:text-violet-400" : "text-[#626274] hover:text-[#7C3AED]"
                    }`}
                  >
                    <GithubIcon className={`w-4 h-4 ${darkMode ? "text-slate-300" : "text-[#626274]"}`} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white text-xs font-medium border border-white/30 dark:border-violet-400/30 backdrop-blur-md shadow-[0_6px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.5)] transition-all duration-300 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
