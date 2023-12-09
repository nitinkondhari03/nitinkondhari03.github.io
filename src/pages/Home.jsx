import nitin_kondhari from "../assets/nitin_kondhari.jpg"

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import "../styles/home.scss"
const Home = () => {
  const  handleClick=()=>{
          window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
      }
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" style={{ fontFamily: "Hedvig Letters Serif"}}>
      {/* Info */}
      <div>
        <motion.span
          {...options}
          transition={{
            delay: 0.1,
          }}
        >
          Hello,My name is 
        </motion.span>
        <motion.span
          {...options}
          transition={{
            delay: 0.2,
          }}
        >
         Nitin Kondhari
        </motion.span>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer.",
              "Front-End Developer.",
              "React Enthusiastic.",
              "Team Player.",
              "Problem Solver.",
              "Fast Learner.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        {/* Social Media & Resume Download Button */}
        <div>
          {/* Resume Download Button */}
          <a d="resume-link-2"  href="https://drive.google.com/uc?export=download&id=1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI"
        onClick={handleClick}>
            <motion.button
            id="resume-button-2"
              {...options}
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
             
              Resume <FiDownload />

            </motion.button>
          </a>

          {/* Mail */}
          <motion.a
           {...options}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            href="mailto:nitinkondhari85@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IoMdMail />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
           {...options}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            href="https://www.linkedin.com/in/nitinkondhari/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </motion.a>

          {/* Github */}
          <motion.a
           {...options}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            href="https://github.com/nitinkondhari03"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </motion.a>
        </div>
      </div>

      {/* Photo */}
      <div>
        <motion.img
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
            rotate: [0, 90, 180, 90, 0],
            borderRadius: ["50%", "0%", "50%", "0%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 2,
          }}
          whileHover={{ scale: [null, 1.2, 1.1] }}
          src={nitin_kondhari}
          alt="Abhijit Biswas"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;