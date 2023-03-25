import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill, RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaPeopleArrows } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiChakraui,
  SiStorybook,
} from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { TbBrandNextjs, TbBulb } from "react-icons/tb";
import { DiGit, DiNpm, DiVisualstudio } from "react-icons/di";
import "../styles/skills.css";

const Skills = () => {
  return (
    <Box
    id="skills"
      style={{
        width: "100%",
        backgroundColor: "white",
        fontFamily: "monospace",
        fontSize: "15px",
      }}
      padding={{ md: "30px", base: "15px" }}
      
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
          SKILLS
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
        paddingLeft={{ lg: "140px",md: "25px", sm: "30px" }}
        marginTop="0px"
      >
        <Box className={"Skills"}>
          <AiFillHtml5 className={"Skill_icons"} />
          <Text className={"skill_text"}>HTML</Text>
        </Box>
        <Box className={"Skills"}>
          <RiCss3Fill className={"Skill_icons"} />
          <Text className={"skill_text"}>CSS</Text>
        </Box>
        <Box className={"Skills"}>
          <IoLogoJavascript className={"Skill_icons"} />
          <Text className={"skill_text"}>JavaScript</Text>
        </Box>
        <Box className={"Skills"}>
          <FaReact className={"Skill_icons"} />
          <Text className={"skill_text"}>React</Text>
        </Box>
        <Box className={"Skills"}>
          <SiRedux className={"Skill_icons"} />
          <Text className={"skill_text"}>Redux</Text>
        </Box>
        <Box className={"Skills"}>
          <SiTypescript className={"Skill_icons"} />
          <Text className={"skill_text"}>TypeScript</Text>
        </Box>
        <Box className={"Skills"}>
          <SiChakraui className={"Skill_icons"} />
          <Text className={"skill_text"}>ChakraUI</Text>
        </Box>
        <Box className={"Skills"}>
          <TbBrandNextjs className={"Skill_icons"} />
          <Text className={"skill_text"}>NextJS</Text>
        </Box>
        <Box className={"Skills"}>
          <IoLogoNodejs className={"Skill_icons"} />
          <Text className={"skill_text"}>NodeJS</Text>
        </Box>
        <Box className={"Skills"}>
          <SiExpress className={"Skill_icons"} />
          <Text className={"skill_text"}>ExpressJS</Text>
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
        color="black"
        margin={{ md: "25px" }}
        paddingLeft={{lg:"140", md: "25px", sm: "30px" }}
        marginTop={"10px"}
      >
        <Box className={"Skills"}>
          <DiGit className={"Skill_icons"} />
          <Text className={"skill_text"}>Git</Text>
        </Box>
        <Box className={"Skills"}>
          <AiFillGithub className={"Skill_icons"} />
          <Text className={"skill_text"}>GitHub</Text>
        </Box>
        <Box className={"Skills"}>
          <DiVisualstudio className={"Skill_icons"} />
          <Text className={"skill_text"}>VS code</Text>
        </Box>
        <Box className={"Skills"}>
          <SiMongodb className={"Skill_icons"} />
          <Text className={"skill_text"}>MongoDB</Text>
        </Box>
        <Box className={"Skills"}>
          <SiCypress className={"Skill_icons"} />
          <Text className={"skill_text"}>Cypress</Text>
        </Box>
        <Box className={"Skills"}>
          <DiNpm className={"Skill_icons"} />
          <Text className={"skill_text"}>NPM</Text>
        </Box>
        <Box className={"Skills"}>
          <SiStorybook className={"Skill_icons"} />
          <Text className={"skill_text"}>Storybook</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;