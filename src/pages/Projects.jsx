import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Text,Box } from "@chakra-ui/react";
import { BsGithub, BsEyeFill } from "react-icons/bs";


import { FaReact, FaPeopleArrows } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill, RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {SiRedux,SiTypescript,SiExpress,SiMongodb,SiChakraui,SiStorybook,} from "react-icons/si";

import html from "../assets/tech_stacks/html.png";
import css from "../assets/tech_stacks/css.png";
import javascript from "../assets/tech_stacks/javascript.png";
import react from "../assets/tech_stacks/react.png";
import mui from "../assets/tech_stacks/mui.png";
import chakra from "../assets/tech_stacks/chakra.jpg";
import mongodb from "../assets/tech_stacks/mongodb.png";
import nodejs from "../assets/tech_stacks/node.webp";
import express from "../assets/tech_stacks/express.webp";
import "../styles/projects.scss"


// OASSIS

import img1 from "../assets/projects/oassi/oasis1.jpg";
import img2 from "../assets/projects/oassi/oasis2.jpg";
import img3 from "../assets/projects/oassi/oasis3.jpg";
import img4 from "../assets/projects/oassi/oasis4.jpg";
import img5 from "../assets/projects/oassi/oasis5.jpg";
import img6 from "../assets/projects/oassi/oasis6.jpg";


//Expedia

import expedia1 from '../assets/projects/Expedia/Expedia1.png'
import expedia2 from '../assets/projects/Expedia/Expedia2.png'
import expedia3 from '../assets/projects/Expedia/Expedia3.png'
import expedia4 from '../assets/projects/Expedia/Expedia4.png'
import expedia5 from '../assets/projects/Expedia/Expedia5.png'
import expedia6 from '../assets/projects/Expedia/Expedia6.png'


//india today
import indiatoday1 from '../assets/projects/indiatoday/indiatoday1.png'
import indiatoday2 from '../assets/projects/indiatoday/indiatoday2.png'
import indiatoday3 from '../assets/projects/indiatoday/indiatoday3.png'
import indiatoday4 from '../assets/projects/indiatoday/indiatoday4.png'
import indiatoday5 from '../assets/projects/indiatoday/indiatoday5.png'
import indiatoday6 from '../assets/projects/indiatoday/indiatoday6.png'


//reliancedigital
import reliancedigital1 from "../assets/projects/relinece/reliancedigital1.png"
import reliancedigital2 from "../assets/projects/relinece/reliancedigital2.png"
import reliancedigital3 from "../assets/projects/relinece/reliancedigital3.png"
import reliancedigital4 from "../assets/projects/relinece/reliancedigital4.png"
import reliancedigital5 from "../assets/projects/relinece/reliancedigital5.jpeg"
import reliancedigital6 from "../assets/projects/relinece/reliancedigital6.jpeg"


const Projects = () => {
  const project_one = [expedia1,expedia2,expedia3,expedia4,expedia5,expedia6];
  const project_two = [indiatoday1,indiatoday2,indiatoday3,indiatoday4,indiatoday5,indiatoday6];
  const project_three = [img1,img2,img3,img4,img5,img6];
  const project_four = [reliancedigital1,reliancedigital2,reliancedigital3,reliancedigital4,reliancedigital5,reliancedigital6];

  return (
    <section  id="projects">
       <Text
        color="black"
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        <span
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          Projects
        </span>
      </Text>

      <div>
        {/* Project 1 */}
        <div class="project-card">
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_one.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="Beauty Bebo Clone"
                />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1 class="project-title">Expedia.com-Clone</h1>

            <p class="project-description">
Expedia.com is an online travel agency owned by Expedia Group, based in Seattle.The website and mobile app can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.
            </p>

            <h2>Tech Stacks</h2>
            <div>
            <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>React</Text>
        </Box>
        <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>CSS</Text>
        </Box>
        <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiChakraui style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>ChakraUI</Text>
        </Box>
              
            </div>

            <p>
            An individual project was completed in 4 days.
            </p>

            <div>
              <a
              class="project-github-link"
                href="https://github.com/nitinkondhari03/Expedia-Clone/tree/main/receptive-top-1546"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
              class="project-deployed-link"
                href="https://reliable-treacle-f527ab.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div class="project-card">
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop >
              {project_two.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="SSENSE Clone"
                />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1 class="project-title">Indiatoday.com-Clone</h1>

            <p class="project-description">
            India Today is a weekly Indian English-language news magazine published 
            by living media it is the most widely circulated magazine 
            in India, with a readership of close to 8 million. In 2014, India Today 
            launched a new online opinion-orientated site.
            </p>

            <h2>Tech Stacks</h2>
            <div>
            <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <AiFillHtml5 style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">HTML</Text>
        </Box>
            <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">CSS</Text>
        </Box>
        <Box style={{ width:'85px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <IoLogoJavascript style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">JavaScript</Text>
        </Box>
            </div>

            <p>
              A collaborative project was built by a team of 4 and executed in 5
              days.
            </p>

            <div>
              <a
              class="project-github-link"
                href="https://github.com/nitinkondhari03/abrupt-kitty-9277"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
              class="project-deployed-link"
                href="https://sparkly-kitten-6c9a45.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Peoject 3 */}
        <div class="project-card">
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_three.map((item, i) => (
                <img className="slider_img" key={i} src={item} alt="ToDo App" />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1 class="project-title">Shopclues.com.com- Clone</h1>

            <p class="project-description">
            Oasis is a clone of website called Shopclues.com. Which is an e-commerce website selling variety of products. My area of Responsibility was All Products and Single Product page.
            </p>

            <h2>Tech Stacks</h2>
            <div>
            <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">React</Text>
        </Box>
        <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiRedux style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">Redux</Text>
        </Box>
        <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">CSS</Text>
        </Box>
        <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiChakraui style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">ChakraUI</Text>
        </Box>
            </div>

            <p>A collaborative project was built by a team of 4 and executed in 5
              days.</p>

            <div>
              <a
              class="project-github-link"
                href="https://github.com/DeshmukhMandar3/Oasis"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
              class="project-deployed-link"
                href="https://superb-meerkat-576c59.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div class="project-card">
          {/* Images */}
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_four.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="TogglTrack Clone"
                />
              ))}
            </Carousel>
          </div>
          {/* Content */}
          <div className="content">
            <h1 class="project-title">Reliancedigital.com-Clone</h1>

            <p class="project-description">
            This is a clone of Reliancedigital website. In this website user can login and place order. Admin can access the products and add the products to the database
            </p>

            <h2>Tech Stacks</h2>
            <div>
            <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">React</Text>
        </Box>
        <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiRedux style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">Redux</Text>
        </Box>
        {/* <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <IoLogoNodejs style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Nodejs</Text>
        </Box>
        <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiExpress style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>ExpressJS</Text>
        </Box> */}
        <Box style={{ width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">CSS</Text>
        </Box>
        <Box style={{width:'80px',border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiChakraui style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">ChakraUI</Text>
        </Box>
            </div>

            <p>
            A collaborative project was built by a team of 4 and executed in 5
              days.
            </p>

            <div>
              <a
              class="project-github-link"
                href="https://github.com/Rajesh-P-07/Reliancedigital.in"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
              class="project-deployed-link"
                href="https://statuesque-griffin-d59c36.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
