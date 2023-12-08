import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillHome,
  AiFillGithub,
  AiFillProject,
  AiFillStar,
  AiFillPhone,
} from "react-icons/ai";
import '../styles/navbar.scss'
import { MdAccountCircle } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { useLocation } from 'react-router-dom'
import {Link,Button,Text} from "@chakra-ui/react"
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  
  let location = useLocation()
  
  console.log(location.hash)
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
      <div id="nav" className={clicked ? "#nav active" : "#nav"}>
        {/* Home */}
       {location.hash==="#home"? <a style={{color:"teal"}} class="nav-link home" href="#home" >
          <AiFillHome />
          HOME
        </a>:<a style={{color:"black"}} class="nav-link home" href="#home" >
          <AiFillHome />
          HOME
        </a>}

        {/* About Me */}
      {location.hash==="#about"?<a style={{color:"teal"}} class="nav-link about" href="#about">
          <MdAccountCircle />
          ABOUT ME
        </a>:<a style={{color:"black"}} class="nav-link about" href="#about">
          <MdAccountCircle />
          ABOUT ME
        </a>}  

        {/* Github Stats */}
        {location.hash==="#github-stats"?<a style={{color:"teal"}} href="#github-stats">
          <AiFillGithub />
          GITHUB STATS
        </a>:<a href="#github-stats" style={{color:"black"}}>
          <AiFillGithub />
          GITHUB STATS
        </a>}

        

        {/* Tech Stacks */}
          {location.hash==="#skills"? <a class="nav-link skills" style={{color:"teal"}}  href="#skills">
          <AiFillStar />
          SKILLS
        </a>: <a class="nav-link skills" style={{color:"black"}}  href="#skills">
          <AiFillStar />
          SKILLS
        </a>}
       

        {/* Projects */}
        {location.hash==="#projects"?<a style={{color:"teal"}} class="nav-link projects" href="#projects">
          <AiFillProject />
          PROJECTS
        </a>:<a class="nav-link projects" style={{color:"black"}} href="#projects">
          <AiFillProject />
          PROJECTS
        </a>}
        

        {/* Contact */}
        {location.hash==="#contact"?<a style={{color:"teal"}} class="nav-link contact" href="#contact">
          <AiFillPhone />
          CONTACT
        </a>:<a class="nav-link contact" style={{color:"black"}} href="#contact">
          <AiFillPhone />
          CONTACT
        </a>}
        
        <a d="resume-link-1" style={{color:"black",_hover:"teal"}} class="nav-link resume" href="https://drive.google.com/uc?export=download&id=1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI"
         onClick={handleClick}
        >
        <HiDocumentText   id="resume-button-1"/>RESUME
       
        </a>
      
      </div>

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
