import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styles from "./tech.module.css";
import { TechImage } from "./TechStackImg";
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

 const TechStack = () => {
  const { colorMode } = useColorMode();
  const BackendData = ["NodeJS", "ExpressJS", "Mongodb"];
  const Frontenddata = [ "HTML", "CSS","JavaScript","ReactJS","NextJS","Chakra-UI",
  "Bootstrap","Material-UI","Redux","Git",];
  const All=["HTML", "CSS","JavaScript","ReactJS","NextJS","Chakra-UI",
  "Bootstrap","Material-UI","Redux","Git","NodeJS", "ExpressJS", "Mongodb","github","vscode","netlify","vercel"]
  const Tools=["github","vscode","netlify","vercel"]
  return (
    <>
      <Desktop>
        <Box mt='100px'  pb={10} textAlign="center" fontFamily="poppins">
          <Heading
            className={styles.Heading}
            fontSize='35px'
            color={'teal.600'}
          >
           Skills
          </Heading>
          <Center>
            <Tabs
              
              w="80%"
              size="sm"
              mt={10}
              variant="unstyled"
            >
              <Center>
                <TabList>
                <Tab
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                 
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                        All
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                    ml={5}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                        Frontend
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    ml={5}
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                        Backend
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    ml={5}
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                        Tools
                      </Text>
                    </Box>
                  </Tab>
                </TabList>
              </Center>
              <TabPanels>
              <TabPanel>
                  <Box
                    mt="50px"
                   
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={5} spacing={10}>
                        {All.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "black",
                                  }
                                : {
                                    background: "black",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="150px"
                            bg={'teal.600'}
                           
                            color={
                              "white"
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Image
                                  src={TechImage(skill)}
                                  borderRadius={10}
                                  alt={skill}
                                  w="100px"
                                  h="100px"
                                />
                                <Heading fontFamily="poppins" fontSize={'18px'} mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                   
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={5} spacing={10}>
                        {Frontenddata.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "black",
                                  }
                                : {
                                    background: "black",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="150px"
                            bg={'teal.600'}
                           
                            color={
                              "white"
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Image
                                  src={TechImage(skill)}
                                  borderRadius={10}
                                  alt={skill}
                                  w="100px"
                                  h="100px"
                                />
                                <Heading fontFamily="poppins" fontSize={'18px'} mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={3} spacing={10}>
                        {BackendData.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "black",
                                  }
                                : {
                                    background: "black",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="150px"
                            bg={'teal.600'}
                            color={
                              'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Image
                                  src={TechImage(skill)}
                                  borderRadius={10}
                                  alt={skill}
                                  w="150px"
                                  h="100px"
                                />
                                <Heading fontFamily="poppins" fontSize={'18px'} mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={3} spacing={10}>
                        {Tools.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "black",
                                  }
                                : {
                                    background: "black",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="150px"
                            bg={'teal.600'}
                            color={
                              'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Image
                                  src={TechImage(skill)}
                                  borderRadius={10}
                                  alt={skill}
                                  w="150px"
                                  h="100px"
                                />
                                <Heading fontFamily="poppins" fontSize={'18px'} mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Box>
      </Desktop>
      <Tablet>
        <Box  pb={10} textAlign="center" fontFamily="poppins">
          <Heading
            className={styles.TabHeading}
            mt={10}
            fontSize='35px'
            color={'teal.600'}
            fontFamily="poppins"
          >
           Skills
          </Heading>
          <Center>
            <Tabs
              
              w="90%"
              size="sm"
              mt={10}
              variant="unstyled"
            >
              <Center>
                <TabList>
                  <Tab
                    bg={'black'}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                    

                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                       All
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    bg={'black'}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                    ml={5}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                        Frontend
                      </Text>
                    </Box>
                  </Tab>
                 
                  <Tab
                    ml={5}
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                        Backend
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    ml={5}
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="20px">
                       Tools
                      </Text>
                    </Box>
                  </Tab>
                </TabList>
              </Center>
              <TabPanels>
              <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={3} spacing={10}>
                        {All.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                              "white"
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={3} spacing={10}>
                        {Frontenddata.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                              "white"
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                  
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={3} spacing={10}>
                        {BackendData.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                             'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                  
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={3} spacing={10}>
                        {Tools.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            ml={5}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                             'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} size="sm">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Box>
      </Tablet>
      <Mobile>
        <Box  textAlign="center" fontFamily="poppins">
          <Heading
            
            className={styles.MobHeading}
            
            fontSize='25px'
            fontFamily="poppins"
            color={'teal.600'}
          >
            Skills
          </Heading>
          <Center>
            <Tabs
              
              w="90%"
              size="sm"
              m='auto'
              mt={10}
              variant="unstyled"
            >
              <Center>
                <TabList>
                <Tab
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text  fontSize="16px">
                        All
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                    ml={4}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="16px">
                        Frontend
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    ml={4}
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="16px">
                        Backend
                      </Text>
                    </Box>
                  </Tab>
                  <Tab
                    ml={4}
                    bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                    color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                    borderRadius={5}
                    _selected={{ color: "white", bg: "teal.600" }}
                  >
                    <Box>
                      <Text fontWeight="" fontSize="16px">
                        Tools
                      </Text>
                    </Box>
                  </Tab>
                </TabList>
              </Center>
              <TabPanels>
              <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={2} spacing={10}>
                        {All.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            ml={'auto'}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                              'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} fontSize='13px'>
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={2} spacing={10}>
                        {Frontenddata.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            m={'auto'}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                              'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} fontSize='13px'>
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={2} spacing={10}>
                        {BackendData.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            m={'auto'}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                             'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} fontSize='13px'>
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    mt="50px"
                    
                    fontFamily="poppins"
                    className="skill--scroll"
                  >
                    <Center>
                      <SimpleGrid columns={2} spacing={10}>
                        {Tools.map((skill, id) => (
                          <Box
                            className={styles.boxes}
                            _hover={
                              colorMode === "light"
                                ? {
                                    background: "#350d36",
                                  }
                                : {
                                    background: "#c1c3c5",
                                  }
                            }
                            m={"auto"}
                            p={5}
                            borderRadius={10}
                            w="100px"
                            bg={'teal.600'}
                            color={
                             'white'
                            }
                            key={id}
                          >
                            <Center>
                              <Stack>
                                <Center>
                                  <Image
                                    src={TechImage(skill)}
                                    borderRadius={10}
                                    alt={skill}
                                    w="70px"
                                    h="70px"
                                  />
                                </Center>
                                <Heading fontFamily="poppins" mt={3} fontSize='13px'>
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Center>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};

export default TechStack
