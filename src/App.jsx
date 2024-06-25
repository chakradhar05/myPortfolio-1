import React from "react";
import Header from "./componets/Header";
import Banner from "./componets/Banner";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Header />
      <Banner />
      <About
        name="John Doe"
        profession="Software Engineer"
        location="San Francisco, CA"
        specialization="Full-Stack Development"
        experience="10"
        skills={["JavaScript", "React", "Node.js"]}
        hobbies="hiking, reading, and playing the guitar"
      />

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
