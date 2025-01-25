import React from "react";
import Navbar from "./components/Navbar"; // Navigation bar component
import About from "./components/About"; // About section component
import Projects from "./components/Projects"; // Projects section component
import Contact from "./components/Contact"; // Contact section component
import Footer from "./components/Footer"; // Footer component
import "./App.css"; // General styling for the app

function App() {
  return (
    <div>
      {/* Navbar at the top of the page */}
      <Navbar />

      {/* About section */}
      <About />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
