import "./App.css";
import { AboutMe } from "./components/screens/AboutMe/AboutMe";
import { Home } from "./components/screens/Home/Home";
import { Projects } from "./components/screens/Projects/Projects";
import { Header } from "./components/ui/Header/Header";
import { Contact } from "./components/screens/Contact/Contact";
import { Technologies } from "./components/screens/Technologies/Technologies";
import { Footer } from "./components/ui/Footer/Footer";
import { IconChevronDown } from "./components/ui/IconChevronDown/IconChevronDown";
import { useEffect, useState } from "react";

function App() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="AboutMe">
          <AboutMe />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Technologies">
          <Technologies />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      {showArrow && <IconChevronDown aria-hidden="true" />}
      <Footer />
    </>
  );
}

export default App;
