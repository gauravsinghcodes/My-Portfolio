import { Award, ExternalLink, GraduationCap, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();

  const certifications = [
    {
      title: "Full Stack Web Development",
      organization: "Civora Nexus",
      period: "July 2025 – August 2025",
      link: "https://c.vialoops.com/CL0/https:%2F%2Fdrive.google.com%2Ffile%2Fd%2F1rFJDVtjnU-qQcOGpwTny5gEJmsYUYdX8%2Fview%3Fusp=drive_link/1/01000198901c1c10-06722156-f748-4421-9d3c-e0130d4ab491-000000/CXTe_pCeIseWAfiyia4E4jTckSvGWdrrS6ivMs5GCJM=417",
    },
    {
      title: "Corporate Social Responsibility",
      organization: "IIT Kharagpur (NPTEL)",
      period: "September 2025",
      link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM2/Ecertificates/110/noc25-mg139/Course/NPTEL25MG139S64360115909315531.pdf",
    },
    {
      title: "NASA International Space Apps Challenge 2025",
      organization: "NASA Hackathon",
      period: "October 2025",
      link: "https://www.linkedin.com/posts/gaurav-singh-b3b3b7324_nasa-spaceapps-hackathon-activity-7400606972057747456-2n2Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHt1J8BDON6vpFvBoqNajg5Ks26GZrrGto",
    },
  ];

  return (
    <section id="about" className={`py-16 md:py-24 px-6 border-b transition-colors duration-300 ${
      darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
    }`}>
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div>
          <h2 className={`text-3xl font-extrabold mb-8 ${
            darkMode ? "text-white" : "text-[#171721]"
          }`}>About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Editorial Body Text */}
            <div className={`lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed font-normal ${
              darkMode ? "text-slate-300" : "text-[#626274]"
            }`}>
              <p>
                I’m a MERN & PERN Stack Developer with hands-on experience building scalable, secure, and user-friendly web applications. I specialize in JavaScript, React, Node.js, Express, Flask, PostgreSQL, and modern APIs.
              </p>
              <p>
                I have built and deployed real-world projects including an AI Site Builder, AI-powered Bookified voice companion, and a production-ready Feedback Web App during my internship at Civora Nexus.
              </p>
              <p>
                I enjoy solving real-world problems, learning new technologies, and building software products that create real impact.
              </p>
            </div>

            {/* Education Card Container */}
            <div className={`lg:col-span-5 border rounded-3xl p-6 space-y-4 transition-colors ${
              darkMode
                ? "bg-slate-800/90 border-slate-700/80 shadow-xl shadow-purple-950/30"
                : "bg-white/90 border-[#E6E1F5] shadow-xs"
            }`}>
              <div className="flex items-center gap-2 text-[#8B5CF6]">
                <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">
                  Education
                </h3>
              </div>

              <div>
                <h4 className={`text-xl font-bold ${darkMode ? "text-white" : "text-[#171721]"}`}>
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className={`mt-1 font-semibold ${darkMode ? "text-slate-300" : "text-[#626274]"}`}>Sandip University</p>
              </div>

              <div className={`grid grid-cols-2 gap-4 pt-4 border-t text-sm ${
                darkMode ? "border-slate-700/80" : "border-[#E6E1F5]"
              }`}>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Graduation Year</p>
                  <p className={`font-bold mt-0.5 ${darkMode ? "text-white" : "text-[#171721]"}`}>2024 - 2028</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">CGPA</p>
                  <p className="font-bold text-emerald-500 mt-0.5">8.43 / 10</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Stream</p>
                  <p className={`font-bold mt-0.5 ${darkMode ? "text-white" : "text-[#171721]"}`}>Computer Science</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Status</p>
                  <p className={`font-bold mt-0.5 ${darkMode ? "text-white" : "text-[#171721]"}`}>Undergraduate</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications & Achievements Section */}
        <div className={`pt-6 border-t ${darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"}`}>
          <div className="flex items-center gap-2 text-[#8B5CF6] mb-6">
            <Award className="w-5 h-5 text-[#8B5CF6]" />
            <h3 className={`text-xl font-extrabold ${darkMode ? "text-white" : "text-[#171721]"}`}>Certifications & Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`border rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors shadow-xs ${
                  darkMode
                    ? "bg-slate-800/90 border-slate-700/80 hover:border-violet-500"
                    : "bg-white/90 border-[#E6E1F5] hover:border-[#A78BFA]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className={`text-base font-bold leading-snug ${darkMode ? "text-white" : "text-[#171721]"}`}>
                      {cert.title}
                    </h4>
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  </div>
                  <p className="text-xs font-bold text-[#8B5CF6]">{cert.organization}</p>
                  <p className="text-xs font-medium text-slate-400 mt-1">{cert.period}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors pt-2 border-t ${
                    darkMode
                      ? "text-violet-400 hover:text-violet-300 border-slate-700/80"
                      : "text-[#7C3AED] hover:text-[#6D28D9] border-[#E6E1F5]"
                  }`}
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;