import { useEffect, useState } from "react";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillHome,
  AiFillGithub,
  AiFillProject,
  AiFillStar,
  AiFillPhone,
} from "react-icons/ai";
import '../styles/navbar.scss'
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { useLocation } from 'react-router-dom'
import {Link,Button,Text} from "@chakra-ui/react"
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  
  let location = useLocation()

  const handleClicked = () => {
    setClicked(!clicked);
  };
  const  handleClick=()=>{
    console.log("yes")
          window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
      }

  return (
    <nav className="navbar" id="nav-menu"  >
      {/* LOGO */}
      <div>
        <a href="#home">
          <p>
          𝒩𝒾𝓉𝒾𝓃 
          </p>
          <p>𝒦𝑜𝓃𝒹𝒽𝒶𝓇𝒾</p>
        </a>
      </div>

      {/* ALL ROUTES */}
      <motion.div
  
      animate={{x:[1000,0]}}
      transition={{
        duration:"3",
        delay:"1"
      }}
      id="nav" className={clicked ? "#nav active" : "#nav"}>
        {/* Home */}
       {location.hash==="#home"? <a style={{color:"teal"}} class="nav-link home" href="#home" >
          <AiFillHome />
          HOME
        </a>:<a style={{color:"black"}} className="nav-link home" href="#home" >
          <AiFillHome />
          HOME
        </a>}

        {/* About Me */}
      {location.hash==="#about"?<a style={{color:"teal"}} className="nav-link about" href="#resume-link-2">
          <MdAccountCircle />
          ABOUT ME
        </a>:<a style={{color:"black"}} className="nav-link about" href="#resume-link-2">
          <MdAccountCircle />
          ABOUT ME
        </a>}  

         {/* Education */}

         {location.hash==="#about"?<a style={{color:"teal"}}  href="#Education">
          <IoMdSchool />
          EDUCATION
        </a>:<a style={{color:"black"}}  href="#Education">
          <IoMdSchool />
          EDUCATION
        </a>}  

   {/* WorkExperiences */}

        {location.hash==="#about"?<a style={{color:"teal"}} href="#WorkExperiences">
          <MdWork />
           WORK EXPERIENCES
        </a>:<a style={{color:"black"}} href="#WorkExperiences">
          <MdWork />
           WORK EXPERIENCES 
        </a>}  

        {/* Github Stats */}
        {location.hash==="#github-stats"?<a style={{color:"teal"}} href="#about-section">
          <AiFillGithub />
          GITHUB STATS
        </a>:<a href="#about-section" style={{color:"black"}}>
          <AiFillGithub />
          GITHUB STATS
        </a>}

        

        {/* Tech Stacks */}
          {location.hash==="#skills"? <a className="nav-link skills" style={{color:"teal"}}  href="#github-section">
          <AiFillStar />
          SKILLS
        </a>: <a className="nav-link skills" style={{color:"black"}}  href="#github-section">
          <AiFillStar />
          SKILLS
        </a>}
       

        {/* Projects */}
        {location.hash==="#projects"?<a style={{color:"teal"}} className="nav-link projects" href="#projects">
          <AiFillProject />
          PROJECTS
        </a>:<a className="nav-link projects" style={{color:"black"}} href="#projects">
          <AiFillProject />
          PROJECTS
        </a>}
        

        {/* Contact */}
        {location.hash==="#contact"?<a style={{color:"teal"}} className="nav-link contact" href="#project-section">
          <AiFillPhone />
          CONTACT
        </a>:<a className="nav-link contact" style={{color:"black"}} href="#project-section">
          <AiFillPhone />
          CONTACT
        </a>}
        
        <a d="resume-link-1" style={{color:"black",_hover:"teal"}} className="nav-link resume" href="https://drive.google.com/uc?export=download&id=1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI"
         onClick={handleClick}
        >
        <HiDocumentText   id="resume-button-1"/>RESUME
       
        </a>
      
      </motion.div>

      {/* For Mobile Screen */}
      <div>
        <span onClick={handleClicked}>
          {clicked ? <FaTimes style={{backgroundColor:"black"}} /> : <FaBars style={{backgroundColor:"black"}} />}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
