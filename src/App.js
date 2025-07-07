import './App.css';
import Navbar from '../src/components/Navbar'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Github from './pages/GithubStats'
import About from './pages/About';
import Footer from "./pages/Footer"
import Education from './pages/Education';
import WorkExperiences from './pages/WorkExperiences';

function App() {
  return (
    <div className="App" >
    <Navbar />
    <Home/>
    <About/>
    {/* <Education/> */}
    <WorkExperiences/>
    <Github/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
