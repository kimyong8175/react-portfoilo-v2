import { useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onSkillClick = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onHeroClick = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onAboutClick={onAboutClick}
        onSkillClick={onSkillClick}
        onProjectClick={onProjectClick}
        onHeroClick={onHeroClick}
        onContactClick={onContactClick}
      />
      <main className="main">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Skills ref={skillRef} />
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
        <Footer />
      </main>
    </>
  );
}

export default App;
