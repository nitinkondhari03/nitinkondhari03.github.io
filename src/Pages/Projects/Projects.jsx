import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styles from "./Projects.module.css";
import { GrGithub } from "react-icons/gr";
import { GoLinkExternal } from "react-icons/go";

import youtubeclone from '../../Assets/projectImg/Youtube-clone.png'
import beautybebo from '../../Assets/projectImg/Beautybebo - Clone.png'
import expedia from '../../Assets/projectImg/Expedia-Clone.png'
import indiatoday from '../../Assets/projectImg/Indiatoday-Clone.png'

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

 const  Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Desktop>
        <Box
          fontFamily="poppins"
        
          pt={10}
          pb={20}
         
          textAlign="center"
        >
          <Heading
         fontSize='35px'
            className={styles.Heading}
           
            color={'teal.600'}
          >
           Projects
          </Heading>
          <Center>
            <SimpleGrid
              
              w="75%"
              ml={20}
              mt={20}
              mr={10}
              columns={[1, 2, 3]}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={expedia}
                ></Image>
                <Heading mt={3} size="md">
                  Expedia-Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    A website to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:"22px",fontWeight: "bold" }}>
                      Tech Stack :
                    </span>
                   {" "} HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                  n Individual project built in 4 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={'90px'} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/receptive-top-1546/tree/main/receptive-top-1546"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://reliable-treacle-f527ab.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={beautybebo}
                ></Image>
                <Heading mt={3} size="md">
                  Beautybebo - Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Beauty Bebo is India's fastest-growing online retail store for makeup, skin care, hair care, personal care, mom and baby care, fragrance, and Ayurveda products.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:"22px", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                   {' '} React | React Router | Chakraui
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project built in 4 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={"60px"} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/awesome-cannon-1526"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>
                      
                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://tourmaline-brigadeiros-ec32e0.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={indiatoday}
                ></Image>
                <Heading mt={3} size="md">
                Indiatoday-Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                  India Today is a weekly Indian English-language news magazine published by Living Media India Limited.A website to live news reading and watch the live news
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:"22px", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                   {' '} HTML | CSS | JavaScript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                  A collaborative project built by a team of 4 executed in 4 days .
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/abrupt-kitty-9277"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://sparkly-kitten-6c9a45.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={youtubeclone}
                ></Image>
                <Heading mt={3} size="md">
                Youtube-clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                  This is youtube app. In this app you can Search and see the search result and also you can play the video as per your search results
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:"22px", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                  {' '}  HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                  An Individual project executed in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/Youtube--Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://enchanting-taffy-ab56dd.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              
            </SimpleGrid>
          </Center>
        </Box>
      </Desktop>
      <Tablet>
        <Box
          fontFamily="poppins"
          pt={5}
          pb={20}
          
          textAlign="center"
        >
          <Heading
         
            className={styles.TabHeading}
            color='teal.600'
            fontFamily="poppins"
          >
             Projects
          </Heading>
          <Center>
            <SimpleGrid
           
              w="75%"
              mt={20}
              columns={2}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={expedia}
                ></Image>
                <Heading mt={3} size="md">
                  Expedia-Clone
                </Heading>
                <Box mt={3} textAlign="left">
                <Text fontSize="15px">
                    A website to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:'18px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                 HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collaborative project built by a team of 3 executed in 5
                    days. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={'60px'} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/receptive-top-1546/tree/main/receptive-top-1546"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://reliable-treacle-f527ab.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={beautybebo}
                ></Image>
                <Heading mt={3} size="md">
                  Beautybebo - Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Beauty Bebo is India's fastest-growing online retail store for makeup, skin care, hair care, personal care, mom and baby care, fragrance, and Ayurveda products.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:'18px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React | React Router | Chakraui
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project built in 4 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/awesome-cannon-1526"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://tourmaline-brigadeiros-ec32e0.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={indiatoday}
                ></Image>
                <Heading mt={3} size="md">
                Indiatoday-Clone
                </Heading>
                <Box mt={3} textAlign="left">
                <Text fontSize="15px">
                  India Today is a weekly Indian English-language news magazine published by Living Media India Limited.A website to live news reading and watch the live news
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:'18px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>
                    {' '} HTML | CSS | JavaScript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                  A collaborative project built by a team of 4 executed in 4 days .
                  </Text>
                  <Center>
                    <Flex w="70%" mt="60px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/abrupt-kitty-9277"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://sparkly-kitten-6c9a45.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={youtubeclone}
                ></Image>
                <Heading mt={3} size="md">
                  youtubeclone Clone
                </Heading>
                <Box mt={3} textAlign="left">
                <Text fontSize="15px">
                  This is youtube app. In this app you can Search and see the search result and also you can play the video as per your search results
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:'18px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>
                    {' '}  HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                  An Individual project executed in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/Youtube--Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://enchanting-taffy-ab56dd.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              
            </SimpleGrid>
          </Center>
        </Box>
      </Tablet>
      <Mobile>
        <Box
          fontFamily="poppins"
          pt={5}
          pb={20}
         
          textAlign="center"
        >
          <Heading
         
            className={styles.MobHeading}
           fontSize='25px'
            fontFamily="poppins"
            color={'teal.600'}
          >
           Projects
          </Heading>
          <Center>
            <SimpleGrid
           
              w="75%"
              mt={25}
              columns={1}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={expedia}
                ></Image>
                <Heading mt={3} size="md">
                  Expedia-Clone
                </Heading>
                <Box mt={3} textAlign="left">
                <Text fontSize="15px">
                    A website to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white",fontSize:'20px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collaborative project built by a team of 3 executed in 5
                    days. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/receptive-top-1546/tree/main/receptive-top-1546"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://reliable-treacle-f527ab.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={beautybebo}
                ></Image>
                <Heading mt={3} size="md">
                  Beautybebo - Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Beauty Bebo is India's fastest-growing online retail store for makeup, skin care, hair care, personal care, mom and baby care, fragrance, and Ayurveda products.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white",fontSize:'20px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React | React Router | Chakraui
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    An Individual project built in 4 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={7} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/awesome-cannon-1526"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://tourmaline-brigadeiros-ec32e0.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={indiatoday}
                ></Image>
                <Heading mt={3} size="md">
                Indiatoday-Clone
                </Heading>
                <Box mt={3} textAlign="left">
                <Text fontSize="15px">
                  India Today is a weekly Indian English-language news magazine published by Living Media India Limited.A website to live news reading and watch the live news
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white",fontSize:'20px', fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    {' '} HTML | CSS | JavaScript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                  A collaborative project built by a team of 4 executed in 4 days .
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/abrupt-kitty-9277"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://sparkly-kitten-6c9a45.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={'teal.600'}
                color={colorMode === "light" ? "#edf2f8" : "#052296"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={youtubeclone}
                ></Image>
                <Heading mt={3} size="md">
                Youtube-clone
                </Heading>
                <Box mt={3} textAlign="left">
                <Text fontSize="15px">
                  This is youtube app. In this app you can Search and see the search result and also you can play the video as per your search results
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "white", fontSize:"22px", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collaborative project built by a team of 5 executed in 5
                    days. Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/nitinkondhari03/Youtube--Clone"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://enchanting-taffy-ab56dd.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
             
            </SimpleGrid>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};

export default Projects
