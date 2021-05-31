import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Aboutme from './components/aboutme/Aboutme';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <Home />
        <Aboutme />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
