import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // <-- import it

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      {/* Scroll Up Button */}
      <ScrollToTopButton /> 
    </>
  );
}

export default App;
