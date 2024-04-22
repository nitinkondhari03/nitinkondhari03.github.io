import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import '../App.css';
const About = () => {
  return (
    
    <Box
      id="about"
      style={{ fontFamily: "Hedvig Letters Serif"}}
      marginBottom={'30px'}
      w={'100%'}
      margin={'auto'}
  
    >
     <Text
        color="black"
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "20px", base: "10px" }}
        marginBottom="25px"
      >
        <span
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          About Me
        </span>
      </Text>
      <Text id='about-section' fontWeight={'400'}   color={"black"}
      fontFamily={"Hedvig Letters Serif"}
            fontSize={"1.4Vmax"} w={'80%'} m="auto" textAlign={'left'}>
      <TypeAnimation
        sequence={[
          `Passionate about coding and eager to work with smart people in a challenging environment.Proficient in MongoDB, ExpressJS, ReactJS, HTML, CSS, JavaScript, NodeJS and Having exceptional interpersonal skills as well as the ability to produce interactions that organizations and people really care about. Love technology and try to use them smartly to make everyday tasks easier.`,
          1000,
        ]}
        speed={90}
        style={{ whiteSpace: 'pre-line',}}
      />
      </Text>
    </Box>
  );
}

export default About