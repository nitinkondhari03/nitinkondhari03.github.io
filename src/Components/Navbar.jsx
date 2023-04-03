import { useState } from "react";
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

import {Link,Button,Text} from "@chakra-ui/react"
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };
  const  handleClick=()=>{
    console.log("yes")
          window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
      }

  return (
    <nav className="navbar" id="nav-menu">
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
        <a  class="nav-link home" href="#home">
          <AiFillHome />
          HOME
        </a>

        {/* About Me */}
        <a class="nav-link about" href="#about">
          <MdAccountCircle />
          ABOUT ME
        </a>

        {/* Github Stats */}

        <a href="#github-stats">
          <AiFillGithub />
          GITHUB STATS
        </a>

        {/* Tech Stacks */}

        <a class="nav-link skills" href="#skills">
          <AiFillStar />
          SKILLS
        </a>

        {/* Projects */}

        <a class="nav-link projects" href="#projects">
          <AiFillProject />
          PROJECTS
        </a>

        {/* Contact */}

        <a class="nav-link contact" href="#contact">
          <AiFillPhone />
          CONTACT
        </a>
        <a d="resume-link-1" class="nav-link resume" href="https://drive.google.com/uc?export=download&id=1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI"
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
