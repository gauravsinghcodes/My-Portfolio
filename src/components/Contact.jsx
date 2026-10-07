import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  ExternalLink, 
  User, 
  Tag, 
  MessageSquare, 
  Send, 
  Loader2, 
  AlertCircle, 
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { darkMode } = useTheme();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMsg, setServerMsg] = useState("");
  const [missingCreds, setMissingCreds] = useState(false);

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
    },
    {
      id: "instagram",
      title: "Instagram Profile",
      value: "instagram.com/gaurav_singh_1615",
      icon: InstagramIcon,
      actionType: "external",
      link: "https://instagram.com/gaurav_singh_1615",
      linkText: "View Profile"
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setServerMsg("");
    setMissingCreds(false);

    let response = null;
    let data = null;

    const primaryEndpoint = import.meta.env.VITE_API_URL || "/api/send-email";

    // Attempt 1: Try configured VITE_API_URL or relative /api/send-email (Vercel Serverless / Vite Dev)
    try {
      response = await fetch(primaryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok || response.status < 500) {
        data = await response.json();
      }
    } catch (err) {
      console.warn(`Primary email endpoint (${primaryEndpoint}) unreachable:`, err);
    }

    // Attempt 2: Try standalone Express server on http://localhost:5000/api/send-email (Local dev fallback)
    if (!data && (import.meta.env.DEV || !import.meta.env.VITE_API_URL)) {
      try {
        response = await fetch("http://localhost:5000/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        data = await response.json();
      } catch (err) {
        console.warn("Express server on http://localhost:5000 also unreachable.", err);
      }
    }

    if (response && response.ok && data && data.success) {
      setStatus("success");
      setServerMsg("Your message has been successfully sent to " + emailAddress + "!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else if (data && data.error) {
      setStatus("error");
      setServerMsg(data.error);
      if (data.missingCredentials) {
        setMissingCreds(true);
      }
    } else {
      setStatus("error");
      setServerMsg("Unable to connect to SMTP mail server. If deployed, make sure environment variables (SMTP_USER, SMTP_PASS) are set in your platform dashboard, or set VITE_API_URL to your backend API.");
      setMissingCreds(true);
    }
  };

  return (
    <section id="contact" className={`py-16 md:py-24 px-6 border-b transition-colors duration-300 ${
      darkMode ? "border-slate-800/80" : "border-[#E6E1F5]"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-left">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 tracking-tight ${
            darkMode ? "text-white" : "text-[#171721]"
          }`}>
            Get In Touch
          </h2>
          <p className={`text-sm md:text-base font-medium max-w-2xl ${
            darkMode ? "text-slate-400" : "text-[#626274]"
          }`}>
            Have a project in mind or want to connect? Send a direct message using the form below or reach out via email and social channels.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Badges */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Direct Contact Options
            </div>

            {contactChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={channel.id}
                  className={`border rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-800/90 border-slate-700/80 hover:border-violet-500 hover:shadow-xl hover:shadow-purple-950/30"
                      : "bg-white/90 border-[#E6E1F5] shadow-xs hover:border-[#A78BFA]"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs ${
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
                      <p className={`text-sm font-bold truncate mt-0.5 ${
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
                        className={`p-2.5 rounded-full border transition-colors ${
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
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-indigo-600/90 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white text-xs font-semibold border border-white/30 dark:border-violet-400/30 backdrop-blur-md shadow-[0_4px_16px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] transition-all duration-300 flex items-center gap-1.5 active:scale-95"
                    >
                      <span>{channel.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Location Banner */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 text-xs font-medium transition-colors ${
              darkMode
                ? "bg-slate-800/90 border-slate-700/80 text-slate-300"
                : "bg-white/90 border-[#E6E1F5] text-[#626274] shadow-xs"
            }`}>
              <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0" />
              <span>Location: <strong className={darkMode ? "text-white font-bold" : "text-[#171721] font-bold"}>India</strong> • Available for Full-Time, Remote & Contract Opportunities</span>
            </div>
            
          </div>

          {/* Right Column: Interactive SMTP Contact Form */}
          <div className="lg:col-span-7">
            <div className={`border rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
              darkMode
                ? "bg-slate-800/95 border-slate-700/80 shadow-2xl shadow-purple-950/20"
                : "bg-white border-[#E6E1F5] shadow-xl shadow-purple-900/5"
            }`}>
              
              {/* Form Heading */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    Send a Message
                  </h3>
                  <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Fill in your details below to deliver an instant email.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-violet-600/10 dark:bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Mail className="w-5 h-5" />
                </div>
              </div>

              {/* Status Alert Banner */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 text-xs leading-relaxed animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-sm">Message Delivered!</p>
                    <p className="mt-0.5">{serverMsg}</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 text-xs font-semibold underline hover:opacity-80 transition-opacity"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-rose-500/10 dark:bg-rose-950/40 border border-rose-500/30 text-rose-700 dark:text-rose-200 flex items-start gap-3.5 text-xs leading-relaxed transition-all">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-rose-900 dark:text-rose-100">Delivery Status Alert</p>
                    <p className="mt-1 text-xs leading-relaxed text-rose-700 dark:text-rose-300">{serverMsg}</p>
                    {missingCreds && (
                      <div className="mt-3">
                        <a 
                          href={`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send directly via Email Client</span>
                          <span className="font-bold">&rarr;</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* SMTP Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}>
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        disabled={status === "submitting"}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                          errors.name
                            ? "border-rose-500 ring-2 ring-rose-500/20"
                            : darkMode
                              ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                              : "bg-slate-50/70 border-[#E6E1F5] text-slate-900 placeholder-slate-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}>
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@example.com"
                        disabled={status === "submitting"}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                          errors.email
                            ? "border-rose-500 ring-2 ring-rose-500/20"
                            : darkMode
                              ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                              : "bg-slate-50/70 border-[#E6E1F5] text-slate-900 placeholder-slate-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Tag className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      disabled={status === "submitting"}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                        darkMode
                          ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                          : "bg-slate-50/70 border-[#E6E1F5] text-slate-900 placeholder-slate-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className={`block text-xs font-bold uppercase tracking-wider ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}>
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] font-medium text-slate-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Gaurav, I'd like to talk about..."
                      disabled={status === "submitting"}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none resize-none ${
                        errors.message
                          ? "border-rose-500 ring-2 ring-rose-500/20"
                          : darkMode
                            ? "bg-slate-900/60 border-slate-700 text-white placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                            : "bg-slate-50/70 border-[#E6E1F5] text-slate-900 placeholder-slate-400 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 font-medium mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_6px_24px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Email ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Email</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
