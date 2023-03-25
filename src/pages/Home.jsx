 import img from "../assets/img.png";
import Typewriter from "typewriter-effect";
import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import '../styles/home.scss'
const Home = () => {
  const  handleClick=()=>{
    window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
}
  return (
    <section  id="home">
      {/* Info */}
      <div>
        <span>Hi,My Name is</span>
        <span id="user-detail-name">Nitin Kondhari</span>
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
          {/* Resume Download Button */}
          <a  id="resume-link-2" href="Nitin-Kondhari-Resume.pdf" onClick={handleClick} 
           download="Nitin-Kondhari-Resume.pdf">
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
