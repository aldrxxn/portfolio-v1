import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experiences/Experiences";
import Contact from "./components/contact/Contact";
import { BouncyCardsFeatures } from "./components/projects/BouncyCardsFeatures ";
// import Projects from "./components/projects/Projects";
// import WaterDropGrid from "./components/hero/WaterDropGrid"

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="Homepage">
        {/* <Sidebar/> */}
        <Hero />

        {/* <WaterDropGrid/> */}
      </section>
      <section>
        <About />
      </section>
      <section>
        {/* <Projects /> */}
        <BouncyCardsFeatures/>
      </section>
      <section id="Pengalaman" className="pengalaman">
        <Experiences />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
