import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import HeaderSection from "./HeaderS";
import {DownloadIcon} from '@chakra-ui/icons'



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

 const Home = () => {
 

  const { colorMode } = useColorMode();
  const  handleClick=()=>{
    console.log("yes")
          window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
      }
  return (
    <>
      <Desktop>
        <Box
          position="relative"
          mt="80px"
          zIndex="1"
          h="450px"
        >
          <Flex alignItems="center">
            <Center>
              <Box
                h="450px"
                textAlign="start"
              >
                <Box ml={250} mt={70}>
                  <Text
                   
                    fontSize="25px"
                   fontWeight={'bold'}
                  >
                 Hi, I am
                  </Text>

                  <Heading
                    size="2xl"
                    mt={2}
                    
                  >
                    Nitin Kondhari
                  </Heading>
                  <Heading
                  
                    fontSize={'25px'}
                    color="teal.600"
                    mt={5}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Web Developer.",
                          "Frontend Developer.",
                          "MERN Stack Developer.",
                          "A tech enthusiastic.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Heading>

                  <Stack     
                   
                   mt='10px'
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
               
              <Button
              mt='20px'
             
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'teal.600'}
                bg={'teal.600'}
                position={''}
                _hover={{ bg: 'black' }}>
                  
                <a onClick={handleClick}  href='Nitin-Kondhari-Resume.pdf' download={'Nitin-Kondhari-Resume.pdf'}>Resume <DownloadIcon /></a>
              </Button>
            </Stack>
                </Box>
              </Box>
            </Center>
            <Box  w="50%">
              <Flex alignItems="center">
                <HeaderSection />
              </Flex>
            </Box>
          </Flex>
        </Box>
       
      </Desktop>

      <Tablet>
        <Box
          w="100%"
          position="relative"
          zIndex="1"
     
          padding={5}
        >
          <Center>
            <Stack mt={90}>
              <Box ml={10}>
                <Circle
                  position="relative"
                  bg="white"
                  opacity="0.9"
                  w="250px"
                  h="250px"
                  alignSelf="flex-end"
                  boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
                >
                  <Box  className={styles.profilePicture}></Box>
                </Circle>
              </Box>
              <Box>
                <Text
                  mt={5}
                  fontSize="1xl"
                  className={styles.font}
                  fontWeight="bold"
                  align="center"
                >
                  Hi, I am
                </Text>

                <Heading
                  size="2xl"
                  mt={5}
                  fontWeight="bold"
                  className={styles.font}
                >
                 Nitin Kondhari
                </Heading>
                <Heading
                  textAlign="center"
                  size="sm"
                  w="100%"
                  color="teal.600"
                  mt={5}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web Developer.",
                        "Frontend Developer.",
                        "MERN Stack Developer.",
                        "A tech enthusiastic.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Heading>
                <Center>
                
                   <Stack     
                   
                   mt='10px'
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
               
              <Button
              mt='20px'
             
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'teal.600'}
                bg={'teal.600'}
                position={''}
                _hover={{ bg: 'black' }}>
                <a  onClick={handleClick}  href='Nitin-Kondhari-Resume.pdf' download={'Nitin-Kondhari-Resume.pdf'}>Resume <DownloadIcon /></a>
                
              </Button>
            </Stack>
                </Center>
              </Box>
            </Stack>
          </Center>
        </Box>
        
      </Tablet>
      <Mobile>
        <Box
          w="100%"
          position="relative"
          zIndex="1"
         m='auto'
          padding={5}
        >
          <Center>
            <Stack mt={90}>
              <Box>
                <Circle
                  position="relative"
                  bg="white"
                  opacity="0.9"
                  w="250px"
                  h="250px"
                  alignSelf="flex-end"
                  boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
                >
                  <Box  className={styles.profilePicture}></Box>
                </Circle>
              </Box>
              <Box>
                <Text
                  mt={5}
                  fontSize="1xl"
                  className={styles.font}
                  fontWeight="bold"
                  align="center"
                >
                  Hi, I am
                </Text>

                <Heading
                  size="2xl"
                  mt={5}
                  fontWeight="bold"
                  className={styles.font}
                  textAlign="center"
                >
                  Nitin Kondhari
                </Heading>
                <Heading
                  size="sm"
                  textAlign="center"
                  w="100%"
                  color="teal.600"
                  mt={5}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web Developer.",
                        "Frontend Developer.",
                        "MERN Stack Developer.",
                        "A tech enthusiastic.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Heading>
                <Center>
                  
                   <Stack     
                   
                   mt='10px'
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
               
              <Button
              mt='20px'
             
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'teal.600'}
                bg={'teal.600'}
                position={''}
                _hover={{ bg: 'black' }}>
                <a  onClick={handleClick}  href='Nitin-Kondhari-Resume.pdf' download={'Nitin-Kondhari-Resume.pdf'}>Resume <DownloadIcon/></a>
                
              </Button>
            </Stack>
                </Center>
              </Box>
            </Stack>
          </Center>
        </Box>
       

      </Mobile>
    </>
  );
};

export default Home