import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Aboutme from './components/aboutme/Aboutme';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen]= useState(false);
    return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <Aboutme />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
