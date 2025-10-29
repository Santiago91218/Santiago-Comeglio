import "./App.css";
import { AboutMe } from "./components/screens/AboutMe/AboutMe";
import { Home } from "./components/screens/Home/Home";
import { Projects } from "./components/screens/Projects/Projects";
import { Header } from "./components/ui/Header/Header";
import { Contact } from "./components/screens/Contact/Contact";
import { Technologies } from "./components/screens/Technologies/Technologies";
import { Footer } from "./components/ui/Footer/Footer";
import { IconChevronDown } from "./components/ui/IconChevronDown/IconChevronDown";

function App() {
  return (
    <>
      <Header />
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
      <IconChevronDown />
      <Footer />
    </>
  );
}

export default App;
