import React, { useEffect, useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from '../Components/Navbar';
import About from './About/About';
import Home from './Home/Home';
import { Box } from '@chakra-ui/react';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from '../Components/Footer';
import TechStack from './Tech Stack/TechStack'
import GithubCalender from './GitCalender/GithubCalender'
import GitStats from './GitStats/GitStats'

const MainPage = () => {
  const about = useRef(null);
const techStack=useRef(null)
  const projects = useRef(null);
  const contacts = useRef(null);
  const githubCalenders= useRef(null)
  const home = useRef(null);
  const gitStats=useRef(null)
  

  useEffect(()=>{
    Aos.init({duration: 2000,});
  },[])


  const handleHome = () => {
    // console.log("hello")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAbout = () => {
    window.scrollTo({
      top:about.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handletechStack = () => {
    window.scrollTo({
      top: techStack.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleProjects = () => {
    window.scrollTo({
      top: projects.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handlegithubCalenders = () => {
    window.scrollTo({
      top: githubCalenders.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handlegitStats=()=>{
    window.scrollTo({
      top:gitStats.current.offsetTop,
      behavior:"smooth",
    })
  }




  const handleContacts = () => {
    window.scrollTo({
      top: contacts.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar id="nav-menu"
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleProjects={handleProjects}
        handleContacts={handleContacts}
       handletechStack={handletechStack}
       handlegithubCalenders={handlegithubCalenders}
       handlegitStats={handlegitStats}

      />



      <Box p={8}>
        <div   ref={home}>
          <Home />
        </div>
        <div  ref={about}>
          <About />
        </div>
        <div  ref={githubCalenders}>
          <GithubCalender/>
        </div>
        <div  ref={gitStats}>
          <GitStats/>
        </div>
        <div  ref={techStack}>
          <TechStack/>
        </div>
        <div  ref={projects}>
          <Projects/>
        </div>
        
        
        <div  ref={contacts}>
          <Contact/>
        </div>
        {/* <Footer /> */}
      </Box>
    </>
  )
}

export default MainPage