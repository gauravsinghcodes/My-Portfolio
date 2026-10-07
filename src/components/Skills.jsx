import { useTheme } from "../context/ThemeContext";

function Skills() {
  const { darkMode } = useTheme();

  const skillGroups = [
    {
      title: "Programming",
      skills: ["C", "C++", "JavaScript", "Java"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Three.js", "GSAP"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "Socket.io"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL", "PostgreSQL", "Vercel Blob"],
    },
    {
      title: "Authentication & APIs",
      skills: ["Clerk", "REST APIs", "Google Gemini API", "WeatherAPI"],
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "GitHub", "Vercel", "Postman", "Figma"],
    },
  ];

  return (
    <section id="skills" className={`py-16 md:py-24 px-6 border-b transition-colors duration-300 ${
      darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        <h2 className={`text-3xl font-extrabold mb-2 ${
          darkMode ? "text-white" : "text-[#171721]"
        }`}>Skills & Technologies</h2>
        <p className={`text-sm font-medium mb-10 ${
          darkMode ? "text-slate-400" : "text-[#626274]"
        }`}>Technologies and tools I work with across the full stack</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`border rounded-2xl p-6 space-y-4 transition-all ${
                darkMode
                  ? "bg-slate-800/90 border-slate-700/80 hover:border-violet-500 hover:shadow-xl hover:shadow-purple-950/30"
                  : "bg-white/90 border-[#E6E1F5] shadow-xs hover:border-[#A78BFA]"
              }`}
            >
              <h3 className={`text-base font-bold pb-3 border-b text-center ${
                darkMode ? "text-white border-slate-700/80" : "text-[#171721] border-[#E6E1F5]"
              }`}>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors shadow-2xs ${
                      darkMode
                        ? "bg-slate-900/60 text-slate-200 border-slate-700/80 hover:bg-violet-900/40 hover:text-violet-300 hover:border-violet-500"
                        : "bg-white/80 text-[#171721] border-[#E6E1F5] hover:bg-[#F1EDFF] hover:border-[#A78BFA] hover:text-[#7C3AED]"
                    }`}
                  >
                    {skill}
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

export default Skills;