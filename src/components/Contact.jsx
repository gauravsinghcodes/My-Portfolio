import { useState } from "react";
import { Mail, MapPin, Check, Copy, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { darkMode } = useTheme();

  const emailAddress = "gs7august@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactChannels = [
    {
      id: "email",
      title: "Email Address",
      value: emailAddress,
      icon: Mail,
      actionType: "copyEmail",
      link: `mailto:${emailAddress}`,
      linkText: "Send Mail"
    },
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      value: "linkedin.com/in/gaurav-singh",
      icon: LinkedinIcon,
      actionType: "external",
      link: "https://www.linkedin.com/in/gaurav-singh-b3b3b7324/",
      linkText: "View Profile"
    },
    {
      id: "github",
      title: "GitHub Repository",
      value: "github.com/gauravsinghcodes",
      icon: GithubIcon,
      actionType: "external",
      link: "https://github.com/gauravsinghcodes",
      linkText: "View Repos"
    }
  ];

  return (
    <section id="contact" className={`py-16 md:py-24 px-6 border-b transition-colors duration-300 ${
      darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10 text-left">
          <h2 className={`text-3xl font-extrabold mb-2 ${
            darkMode ? "text-white" : "text-[#171721]"
          }`}>Get In Touch</h2>
          <p className={`text-sm font-medium ${
            darkMode ? "text-slate-400" : "text-[#626274]"
          }`}>
            Feel free to connect directly via Email, LinkedIn, or check out my repositories on GitHub.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel) => {
            const IconComponent = channel.icon;
            return (
              <div
                key={channel.id}
                className={`border rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                  darkMode
                    ? "bg-slate-800/90 border-slate-700/80 hover:border-violet-500 hover:shadow-xl hover:shadow-purple-950/30"
                    : "bg-white/90 border-[#E6E1F5] shadow-xs hover:border-[#A78BFA]"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs ${
                    darkMode
                      ? "bg-purple-950/50 text-purple-300 border-purple-800/60"
                      : "bg-[#F1EDFF] text-[#7C3AED] border-[#E6E1F5]"
                  }`}>
                    <IconComponent className="w-5 h-5 text-[#7C3AED] dark:text-purple-300" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {channel.title}
                    </p>
                    <p className={`text-sm sm:text-base font-bold truncate mt-0.5 ${
                      darkMode ? "text-white" : "text-[#171721]"
                    }`}>
                      {channel.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                  {channel.actionType === "copyEmail" && (
                    <button
                      onClick={handleCopyEmail}
                      className={`p-2 sm:p-2.5 rounded-full border transition-colors ${
                        darkMode
                          ? "bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-violet-300"
                          : "bg-white/80 border-[#E6E1F5] text-[#626274] hover:bg-[#F1EDFF] hover:text-[#7C3AED] shadow-2xs"
                      }`}
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}

                  <a
                    href={channel.link}
                    target={channel.actionType === "external" ? "_blank" : "_self"}
                    rel={channel.actionType === "external" ? "noreferrer" : ""}
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white text-xs font-medium border border-white/30 dark:border-violet-400/30 backdrop-blur-md shadow-[0_6px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center gap-1.5 active:scale-95"
                  >
                    <span>{channel.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Banner */}
        <div className={`mt-6 p-4 rounded-2xl border flex items-center gap-3 text-xs font-normal transition-colors ${
          darkMode
            ? "bg-slate-800/90 border-slate-700/80 text-slate-300"
            : "bg-white/90 border-[#E6E1F5] text-[#626274] shadow-xs"
        }`}>
          <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0" />
          <span>Location: <strong className={darkMode ? "text-white font-bold" : "text-[#171721] font-bold"}>India</strong> • Available for Full-Time, Remote & On-Site Opportunities</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;
