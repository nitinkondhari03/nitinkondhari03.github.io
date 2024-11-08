import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill, RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact} from "react-icons/fa";


import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiChakraui,
  SiStorybook,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs, TbBulb } from "react-icons/tb";
import { DiGit, DiNpm, DiVisualstudio } from "react-icons/di";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        width: "100%",
        backgroundColor: "white",
        fontFamily: "Hedvig Letters Serif",
        fontSize: "15px",
        padding:"45px"
      }}
    >
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
          Skills
        </span>
      </Text>
      {/* Languages Framework & Libraries */}
      <Text
        textAlign={"center"}
        fontSize={{ md: "30px", base: "20px" }}
        margin={{ md: "20px", base: "10px" }}
        marginBottom="25px"
        marginTop={"30px"}
        color="black"
      >
        Languages Frameworks & Libraries
      </Text>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 4 }}
        spacing={{ base: 5, md: 10 }}
        color={"rgb(205,215,246)"}
        paddingLeft={{ base: "30px", lg: "140px", md: "25px", sm: "20px" }}
        marginTop="0px"
        fontFamily={"monospace"}
      >
        <Box className="skills-card">
          <AiFillHtml5 className="skills-card-img" />
          <Text className="skills-card-name">HTML</Text>
        </Box>
        <Box className="skills-card">
          <RiCss3Fill className="skills-card-img" />
          <Text className="skills-card-name">CSS</Text>
        </Box>
        <Box className="skills-card">
          <IoLogoJavascript className="skills-card-img" />
          <Text className="skills-card-name">JavaScript</Text>
        </Box>
        <Box className="skills-card">
          <FaReact className="skills-card-img" />
          <Text className="skills-card-name">React</Text>
        </Box>
        <Box className="skills-card">
          <SiRedux className="skills-card-img" />
          <Text className="skills-card-name">Redux</Text>
        </Box>
        <Box className="skills-card">
          <SiTypescript className="skills-card-img" />
          <Text className="skills-card-name">TypeScript</Text>
        </Box>
        <Box className="skills-card">
          <TbBrandNextjs className="skills-card-img" />
          <Text className="skills-card-name">NextJS</Text>
        </Box>
        <Box className="skills-card">
          <SiBootstrap className="skills-card-img" />
          <Text className="skills-card-name">Bootstrap</Text>
        </Box>
        <Box className="skills-card">
          <SiTailwindcss className="skills-card-img" />
          <Text className="skills-card-name">TailwinCSS</Text>
        </Box>
        <Box className="skills-card">
          <SiChakraui className="skills-card-img" />
          <Text className="skills-card-name">ChakraUI</Text>
        </Box>
        <Box className="skills-card">
          <IoLogoNodejs className="skills-card-img" />
          <Text className="skills-card-name">NodeJS</Text>
        </Box>
        <Box className="skills-card">
          <SiExpress className="skills-card-img" />
          <Text className="skills-card-name">ExpressJS</Text>
        </Box>
        <Box className="skills-card">
          <SiMongodb className="skills-card-img" />
          <Text className="skills-card-name">mongoDB</Text>
        </Box>
      </SimpleGrid>

      {/* tools */}
      <Text
        textAlign={"center"}
        fontSize={{ md: "30px", base: "20px" }}
        margin={{ md: "20px", base: "10px" }}
        marginBottom="25px"
        color="black"
        paddingTop="45px"
      >
        Tools
      </Text>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 4 }}
        spacing={{ base: 5, md: 10 }}
        color={"rgb(205,215,246)"}
        paddingLeft={{ base: "30px", lg: "140px", md: "25px", sm: "20px" }}
        marginTop={"10px"}
        fontFamily={"monospace"}
      >
        <Box className="skills-card">
          <DiGit className="skills-card-img" />
          <Text className="skills-card-name">Git</Text>
        </Box>
        <Box className="skills-card">
          <AiFillGithub className="skills-card-img" />
          <Text className="skills-card-name">GitHub</Text>
        </Box>
        <Box className="skills-card">
          <DiVisualstudio className="skills-card-img" />
          <Text className="skills-card-name">VS code</Text>
        </Box>
        <Box className="skills-card">
          <SiMongodb className="skills-card-img" />
          <Text className="skills-card-name">Mongodb Compass</Text>
        </Box>
        <Box className="skills-card">
          <DiNpm className="skills-card-img" />
          <Text className="skills-card-name">NPM</Text>
        </Box>
        <Box className="skills-card">
          <SiPostman className="skills-card-img" />
          <Text className="skills-card-name">Postman</Text>
        </Box>
      </SimpleGrid>
    </section>
  );
};

export default Skills;
