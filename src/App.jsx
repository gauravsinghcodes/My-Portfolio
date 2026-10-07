import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function MainContent() {
  const { darkMode } = useTheme();
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-[#0e0e17] text-[#F8FAFC] selection:bg-[#7C3AED]/40 selection:text-white" : "bg-[#F7F7FA] text-[#171721] selection:bg-[#F1EDFF] selection:text-[#7C3AED]"
    }`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;