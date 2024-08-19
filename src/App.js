import "./App.css";
import Footer from "./Components/Footer";
import Hambureger from "./Components/Hambureger";
import HeroBanner from "./Components/HeroBanner";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div className="App relative">
      <div>
        <NavBar></NavBar>
        <section id="home" className="banner relative">
          <HeroBanner />
        </section>

        <div className="container-wrap relative">
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>

        <section id="footer">
          <Footer />
        </section>
      </div>
      <div id="side-bar-holder">
        <Hambureger />
      </div>
    </div>
  );
}

export default App;
