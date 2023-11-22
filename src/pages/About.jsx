import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import nitin_kondhari from "../assets/nitin_kondhari.jpg"

const About  = () => {
  return (
    <div  id="about" class="about section">
    <Box 
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
        marginLeft={{ md: "25px", base: "10px" }}
      >
        <span
        
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          About
        </span>
      </Text>
      <Flex
        margin={{ md: "20px", base: "10px" }}
        flexDirection={{ base: "column", md: "column", sm: "row" ,lg:"row"}}
        alignItems={"center"}
      >
        <Box padding={"25px"} marginLeft={"100px"} width={{ base: "100%", md: "50%", sm: "45%" }}>
          <img
          class="home-img"
            src={nitin_kondhari}
            alt="headshot"
            style={{
              width: "70%",
              objectFit:"cover",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderTopLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          />
        </Box>
        <Box
          padding={{ md: "45px" }}
          width={{ base: "100%", md: "100%" }}
          textAlign={{base:"left",md:"left",sm:"left",lg:"left"}}
        >
          <Text color={"black"} fontSize={{ base: "25px", md: "25px" }} id="user-detail-name" >
            I'm Nitin Kondhari
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "20px", md: "20px" }}
            id="user-detail-intro"
          >
            A competant web developer, skilled in the MERN stack with 1200+
            hours of practical coding. Knowledge of HTML, CSS, Javascript etc.
            Highly adaptable and avid learner. Aims to leverage knowledge and
            build worldclass Web applications while facilitating organization in
            achieving functional goals.
          </Text>
        </Box>
      </Flex>
    </Box>
    </div>
  );
};

export default About;
