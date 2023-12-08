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


//Ecommere
import ecommerce1 from "../assets/projects/Ecommerce/EcoHome.png"
import ecommerce2 from "../assets/projects/Ecommerce/Ecologin.png"
import ecommerce3 from "../assets/projects/Ecommerce/EcoRegister.png"
import ecommerce4 from "../assets/projects/Ecommerce/EcoForgetPassword.png"
import ecommerce5 from "../assets/projects/Ecommerce/EcoMyProfile.png"
import ecommerce6 from "../assets/projects/Ecommerce/EcoUpdateProfile.png"
import ecommerce7 from "../assets/projects/Ecommerce/EcoProductpage.png"
import ecommerce8 from "../assets/projects/Ecommerce/EcoProductDetailsPage.png"
import ecommerce9 from "../assets/projects/Ecommerce/EcoCartPage.png"
import ecommerce10 from "../assets/projects/Ecommerce/EcoShippingDetails.png"
import ecommerce11 from "../assets/projects/Ecommerce/EcoShippingInfo.png"
import ecommerce12 from "../assets/projects/Ecommerce/EcopaymentPage.png"
import ecommerce13 from "../assets/projects/Ecommerce/EcoOrdersPage.png"
import ecommerce14 from "../assets/projects/Ecommerce/EcoOrderDetailsPage.png"
import ecommerce15 from "../assets/projects/Ecommerce/EcoAdmin Dashboard.png"
import ecommerce16 from "../assets/projects/Ecommerce/EcoAdminProductpage.png"
import ecommerce17 from "../assets/projects/Ecommerce/EcoAdminCreateProductpage.png"
import ecommerce18 from "../assets/projects/Ecommerce/EcoAdminAllOrdersPage.png"
import ecommerce19 from "../assets/projects/Ecommerce/EcoAdminAllUsersPage.png"
import ecommerce20 from "../assets/projects/Ecommerce/EcoAdminAllReviewsPage.png"


//GadgetGalaxy
import gadget1 from "../assets/projects/GadgetGalaxy/gadgetHomepage.png"
import gadget2 from "../assets/projects/GadgetGalaxy/gadgetLogin.png"
import gadget3 from "../assets/projects/GadgetGalaxy/gadgetSignup.png"
import gadget4 from "../assets/projects/GadgetGalaxy/gadgetProductsPage.png"
import gadget5 from "../assets/projects/GadgetGalaxy/gadgetSignleProductPage.png"
import gadget6 from "../assets/projects/GadgetGalaxy/gadgetCartPage.png"
import gadget7 from "../assets/projects/GadgetGalaxy/gadgetCartPage.png"
import gadget8 from "../assets/projects/GadgetGalaxy/gadgetPaymentPage.png"
import gadget9 from "../assets/projects/GadgetGalaxy/gadgetAdminLogin.png"
import gadget10 from "../assets/projects/GadgetGalaxy/gadgetAdminSignup.png"
import gadget11 from "../assets/projects/GadgetGalaxy/gadgetAdminDashboard.png"
import gadget12 from "../assets/projects/GadgetGalaxy/gadgetAdminProducts.png"
import gadget13 from "../assets/projects/GadgetGalaxy/gadgetAdminEditProduct.png"


const Projects = () => {

  const project_one=[ecommerce1,ecommerce2,ecommerce3,ecommerce4,ecommerce5,ecommerce6,ecommerce7,ecommerce8,ecommerce9,ecommerce10,ecommerce11,ecommerce12,ecommerce13,ecommerce14,ecommerce15,ecommerce16,ecommerce17,ecommerce18,ecommerce19,ecommerce20]

  const project_two=[gadget1,gadget2,gadget3,gadget4,gadget5,gadget6,gadget7,gadget8,gadget9,gadget10,gadget11,gadget12,gadget13]
  const project_three = [img1,img2,img3,img4,img5,img6];
  const project_four = [reliancedigital1,reliancedigital2,reliancedigital3,reliancedigital4,reliancedigital5,reliancedigital6];

  return (
    <section  id="projects" style={{ fontFamily: "monospace"}}>
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
       

        <div class="project-card">
          
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
          
          <div className="content">
            <h1 class="project-title">Ecommerce.com</h1>

            <p class="project-description">
            E-commerce is a an Indian online store that specializes in selling a wide range of designer mobile phone cases, laptop sleeves, and other tech accessories
            </p>
     
            <h2>Tech Stacks</h2>
            <div>
            <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}} style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>React</Text>
        </Box>
        <Box width={{base:"20%",sm:"20%", md: "17%", lg: "15%",xl:"20%","2xl":"15%"}} style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiRedux style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">Redux</Text>
        </Box>
        <Box width={{base:"20%",sm:"20%",md: "17%", lg: "15%",xl:"20%","2xl":"15%"}} style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>CSS</Text>
        </Box>
              
            </div>
            <div>
            <Box width={{base:"27%",sm:'21%',md: "18%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <IoLogoNodejs style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Nodejs</Text>
        </Box>
            <Box width={{base:"27%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiExpress style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Express</Text>
        </Box>
        <Box width={{base:"30%",sm:'22%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{ border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiMongodb style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Mongodb</Text>
        </Box>
              
            </div>

            <p>
            An individual project built in 8 days.
            </p>

            <div>
              <a
              class="project-github-link"
                href="https://github.com/nitinkondhari03/ECOMMERCE"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
              class="project-deployed-link"
                href="https://ecommerce-ruby-ten.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BsEyeFill />
                Live
              </a>
            </div>
          </div>
        </div>

        
        <div class="project-card">
          
          <div>
            <Carousel autoPlay infiniteLoop>
              {project_two.map((item, i) => (
                <img
                  className="slider_img"
                  key={i}
                  src={item}
                  alt="Beauty Bebo Clone"
                />
              ))}
            </Carousel>
          </div>
          
          <div className="content">
            <h1 class="project-title">GadgetGalaxy.com</h1>

            <p class="project-description">
            An E-Commerce website for designer mobile phone cases, laptop sleeves, and other tech accessories
            </p>

            <h2>Tech Stacks</h2>
            <div>
            <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>React</Text>
        </Box>
        <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{ border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiRedux style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">Redux</Text>
        </Box>
        <Box width={{base:"18%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>CSS</Text>
        </Box>
        <Box width={{base:"24%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <IoLogoNodejs style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Nodejs</Text>
        </Box>
              
            </div>
            <div>
           
            <Box width={{base:"27%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiExpress style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Express</Text>
        </Box>
        <Box width={{base:"30%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiMongodb style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>Mongodb</Text>
        </Box>
        <Box width={{base:"30%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiChakraui style={{margin:'auto',paddingTop:'2px'}}/>
          <Text>ChakraUI</Text>
        </Box>
              
            </div>

            <p>
            A collaborative project built by a team of 5 executed in 5 days .
            </p>

            <div>
              <a
              class="project-github-link"
                href="https://github.com/uzairansari11/GadgetGalaxy"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                GitHub
              </a>
              <a
              class="project-deployed-link"
                href="https://gadgetgalaxy.netlify.app/"
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
            <h1 class="project-title">Shopclues.com- Clone</h1>

            <p class="project-description">
            Oasis is a clone of website called Shopclues.com. Which is an e-commerce website selling variety of products. My area of Responsibility was All Products and Single Product page.
            </p>

            <h2>Tech Stacks</h2>
            <div>
            <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">React</Text>
        </Box>
        <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{ border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiRedux style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">Redux</Text>
        </Box>
        <Box width={{base:"18%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{ border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">CSS</Text>
        </Box>
        <Box width={{base:"29%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
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
            <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <FaReact style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">React</Text>
        </Box>
        <Box width={{base:"20%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}   style={{ border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <SiRedux style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">Redux</Text>
        </Box>
        
        <Box width={{base:"18%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{ border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
          <RiCss3Fill style={{margin:'auto',paddingTop:'2px'}}/>
          <Text class="project-tech-stack">CSS</Text>
        </Box>
        <Box width={{base:"29%",sm:'20%',md: "17%", lg: "15%",xl: "20%","2xl": "15%"}}  style={{border:"1px solid black",borderTopLeftRadius:"10px",borderBottomRightRadius:"10px",padding:"5px"}}>
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
