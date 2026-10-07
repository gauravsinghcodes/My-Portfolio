import civoranexusLogo from "../assets/civoranexus.png";
import thinkbuildLogo from "../assets/thinkbuild.png";
import { useTheme } from "../context/ThemeContext";

function Experience() {
  const { darkMode } = useTheme();

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      type: "Internship",
      organization: "Civora Nexus",
      logo: civoranexusLogo,
      period: "July 2025 - August 2025",
      description: "Worked as a Full Stack Developer Intern developing production-ready web applications, secure user authentication, and data analytics dashboards.",
      bullets: [
        "Built a production-ready Feedback Application from scratch.",
        "Implemented secure user authentication and role-based management.",
        "Designed and integrated databases for seamless data flow.",
        "Created interactive dashboards for data visualization & analysis.",
      ],
      tech: ["Flask", "SQLite", "HTML/CSS", "JavaScript", "REST APIs", "PythonAnywhere"],
    },
    {
      role: "Web Developer Intern",
      type: "Internship",
      organization: "ThinkBuild",
      logo: thinkbuildLogo,
      period: "September 2026 - Present",
      description: "Currently working as a Web Developer Intern at ThinkBuild, actively engineering scalable frontend user interfaces, full-stack feature integrations, and responsive production web applications.",
      bullets: [
        "Building responsive and accessible web interfaces using Next.js, React.js, and Tailwind CSS.",
        "Integrating REST APIs, server-side data fetching, and state management solutions.",
        "Collaborating on full-stack database integrations and feature implementations.",
        "Participating in active sprint planning, code reviews, and UI/UX optimizations.",
      ],
      tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className={`py-16 md:py-24 px-6 border-b transition-colors duration-300 ${
      darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        <h2 className={`text-3xl font-extrabold mb-2 ${
          darkMode ? "text-white" : "text-[#171721]"
        }`}>Work Experience</h2>
        <p className={`text-sm font-medium mb-10 ${
          darkMode ? "text-slate-400" : "text-[#626274]"
        }`}>Internship and software engineering experience</p>

        {/* Horizontal Grid Layout (2-Column Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`border rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all ${
                darkMode
                  ? "bg-slate-800/90 border-slate-700/80 hover:border-violet-500 hover:shadow-xl hover:shadow-purple-950/30"
                  : "bg-white/90 border-[#E6E1F5] shadow-xs hover:border-[#A78BFA]"
              }`}
            >
              <div className="space-y-4">
                {/* Header with Info on Left, Date & Logo on Right */}
                <div className={`flex items-start justify-between gap-4 border-b pb-4 ${
                  darkMode ? "border-slate-700/80" : "border-[#E6E1F5]"
                }`}>
                  
                  {/* Left Side: Badge, Role, Organization */}
                  <div className="space-y-1">
                    <span className={`inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full border mb-1 ${
                      darkMode
                        ? "bg-purple-950/50 text-purple-300 border-purple-800/60"
                        : "bg-[#F1EDFF] text-[#7C3AED] border-[#E6E1F5]"
                    }`}>
                      {exp.type}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold leading-snug ${
                      darkMode ? "text-white" : "text-[#171721]"
                    }`}>{exp.role}</h3>
                    <p className={`text-xs font-bold ${darkMode ? "text-slate-300" : "text-[#626274]"}`}>{exp.organization}</p>
                  </div>

                  {/* Right Side: Date above, Logo below */}
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-xs text-slate-400 font-semibold mb-2">{exp.period}</span>
                    
                    {/* Organization Logo below date */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border p-2.5 flex items-center justify-center shadow-2xs ${
                      darkMode ? "bg-white border-slate-700" : "bg-white border-[#E6E1F5]"
                    }`}>
                      <img
                        src={exp.logo}
                        alt={exp.organization}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                </div>

                <p className={`text-xs sm:text-sm font-normal leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-[#626274]"
                }`}>
                  {exp.description}
                </p>

                <div className="space-y-2 pt-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Achievements & Responsibilities:
                  </p>
                  <ul className={`list-disc list-inside space-y-1.5 text-xs font-normal ${
                    darkMode ? "text-slate-300" : "text-[#626274]"
                  }`}>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-4 border-t flex flex-wrap items-center gap-1.5 ${
                darkMode ? "border-slate-700/80" : "border-[#E6E1F5]"
              }`}>
                <span className="text-xs text-slate-400 font-bold mr-1">Stack:</span>
                {exp.tech.map((t) => (
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
