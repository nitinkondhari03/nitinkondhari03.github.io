import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "./About.module.css";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1008 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1007 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return isMobile ? children : null;
};

 const About = () => {
  return (
    <>
      <Desktop>
        <Box   textAlign="center">
          <Heading
           
            className={styles.Heading}
            mt={10}
          fontSize='35px'
          color={'teal.600'}
           
          >
          About Me
          </Heading>

          <Flex ml={20} mt={20} mr={10}>
            <Center>
              <Box  className={styles.img}></Box>
            </Center>

            <Spacer />
            <Box
              w="50%"
              
              ml={10}
              textAlign="left"
              fontFamily="poppins"
              mr={10}
            >
              <Text fontSize="18px">
              My name is Nitin Kondhari. I am from palghar ( India ) and I enjoy creating things that live on the internet.
              </Text>
              <Text mt={5} fontSize="18px">
              A Skilled full stack developer and quick learner who can quickly adapt to new environments. Looking for a challenging role in the industry to utilize skills and learnings. CSS.
              </Text>
              <Text mt={5} fontSize="18px">
              I am passionate about solving technical problems, researching and developing new sites and technologies. I undertake and challenge myself to always improve, by being proactive, diligent, responsible, and committed to finding the perfect solution to any problem.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Desktop>
      <Tablet>
        <Box pt={5} pb={10} textAlign="center">
          <Heading
            
            className={styles.TabHeading}
            mt={5}
            
            fontFamily="poppins"
            fontSize='35px'
          color={'teal.600'}
          >
             About Me
          </Heading>
          <Center>
            <Stack mt={10} p={3}>
              <Center>
                <Box
                  mb="-100px"
                  
                  className={styles.MObimg}
                ></Box>
              </Center>

              <Box
                w="100%"
                p={10}
                
                fontFamily="poppins"
              >
                <Text textAlign="justify" fontSize="18px">
                My name is Nitin Kondhari. I am from palghar ( India ) and I enjoy creating things that live on the internet.
                <br/>
                A Skilled full stack developer and quick learner who can quickly adapt to new environments. Looking for a challenging role in the industry to utilize skills and learnings. CSS.
                <br/>
                I am passionate about solving technical problems, researching and developing new sites and technologies. I undertake and challenge myself to always improve, by being proactive, diligent, responsible, and committed to finding the perfect solution to any problem.
                </Text>
              </Box>
            </Stack>
          </Center>
        </Box>
      </Tablet>
      <Mobile>
        <Box pt={5} pb={10} textAlign="center">
          <Heading
            
            className={styles.MobileHeading}
            mt={5}
           color='teal.600'
            fontFamily="poppins"
            fontSize={'25px'}
          >
            About Me
          </Heading>
          <Center>
            <Stack mt={10} p={3}>
              <Box
                mb="-120px"
                
                className={styles.MObimg}
              ></Box>

              <Box
                w="100%"
                pt={8}
                
                fontFamily="poppins"
              >
                <Text textAlign="justify" fontSize="15px">
                My name is Nitin Kondhari. I am from palghar ( India ) and I enjoy creating things that live on the internet.
               <br/>
                
               A Skilled full stack developer and quick learner who can quickly adapt to new environments. Looking for a challenging role in the industry to utilize skills and learnings. CSS.
                <br/>
                 i am passionate about solving technical problems, researching and developing new sites and technologies. I undertake and challenge myself to always improve, by being proactive, diligent, responsible, and committed to finding the perfect solution to any problem.
                </Text>
              </Box>
            </Stack>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};

export default About
