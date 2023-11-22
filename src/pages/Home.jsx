 import img from "../assets/img.png";
import Typewriter from "typewriter-effect";
import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import '../styles/home.scss'
import { Button, Link } from "@chakra-ui/react";
const Home = () => {
  const  handleClick=()=>{
    console.log("yes")
          window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
      }
  return (
    <section  id="home">
      {/* Info */}
      <div >
        <span>Hi,My Name is</span>
        <span >Nitin Kondhari</span>
        <Typewriter
      
          options={{
            strings: [
              "Full Stack Web Developer.",
              "Front-End Developer.",
              "React Developer.",
              "MERN Stack Developer.",
              "A Tech Enthusiastic.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        {/* Social Media & Resume Download Button */}
        <div>
        <a d="resume-link-2"  href="https://drive.google.com/uc?export=download&id=1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI"
        onClick={handleClick}
        >
        <button id="resume-button-2">
              Resume <FiDownload />
            </button>
        </a>
         
          {/* Mail */}
          <a
            href="mailto:nitinkondhari85@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IoMdMail />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nitinkondhari/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          {/* Github */}
          <a
            href="https://github.com/nitinkondhari03"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </div>

      {/* Photo */}
      
    </section>
  );
};

export default Home;
