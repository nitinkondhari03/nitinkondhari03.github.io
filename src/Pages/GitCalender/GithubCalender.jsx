import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "./Github.module.css";
import { FaCode, FaGit } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BiUserVoice } from "react-icons/bi";
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

 const GithubCalender = () => {
  return (
    <>
      <Desktop>
        <Box >
          <Heading
            mb="25px"
            mt='10px'
            className={styles.Heading}
            fontSize='35px'
            color={'teal.600'}
            m='auto'
            textAlign={'center'}
          >
            Github Activity
          </Heading>
          <Center className={styles.boxes} mt={10} >
            <GitHubCalendar username="nitinkondhari03" />
          </Center>
          <Box mt="40px">
            <Center>
              <Flex w="55%"  justifyContent="space-between">
                <Box>
                  <Flex className={styles.texts} alignItems="center">
                    <FaCode size="30px" />
                    <Text ml={5}>1200+ Hours Practical Coding</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <RiLightbulbFlashLine size="30px" />
                    <Text ml={5}>300+ Hours Data Structures & Algorithms</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <BiUserVoice size="30px" />
                    <Text ml={5}>100+ Hours Soft Skill Development</Text>
                  </Flex>
                </Box>
                <Spacer />

                <Box>
                  <Flex className={styles.texts} alignItems="center">
                    <AiOutlineFundProjectionScreen size="30px" />
                    <Text ml={3}>5+ Projects</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <VscGraph size="30px" />
                    <Text ml={3}>10+ Mini Projects</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <FaGit size="30px" /> <Text ml={3}>500+ Git Commits</Text>
                  </Flex>
                </Box>
              </Flex>
            </Center>
          </Box>
        </Box>
      </Desktop>
      <Tablet>
        <Box mt="-50px" mb={10}>
          <Heading
            mb="25px"
            
            className={styles.TabHeading}
            size="xl"
            fontFamily="poppins"
            color={'teal.600'}
            m='auto'
            textAlign={'center'}
          >
            Github Activity
          </Heading>
          <Center
            className={styles.boxes}
            w="80%"
            m="auto"
            mt={10}
            
          >
            <GitHubCalendar username="nitinkondhari03" />
          </Center>
          <Box mt="40px">
            <Center>
              <Flex w="75%"  justifyContent="space-between">
                <Box>
                  <Flex className={styles.texts} alignItems="center">
                    <FaCode size="30px" />
                    <Text ml={5}>1200+ Hours Practical Coding</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <RiLightbulbFlashLine size="30px" />
                    <Text ml={5}>300+ Hours Data Structures & Algorithms</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <BiUserVoice size="30px" />
                    <Text ml={5}>100+ Hours Soft Skill Development</Text>
                  </Flex>
                </Box>
                <Spacer />

                <Box>
                  <Flex className={styles.texts} alignItems="center">
                    <AiOutlineFundProjectionScreen size="30px" />
                    <Text ml={3}>5+ Projects</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <VscGraph size="30px" />
                    <Text ml={3}>10+ Mini Projects</Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <FaGit size="30px" /> <Text ml={3}>500+ Git Commits</Text>
                  </Flex>
                </Box>
              </Flex>
            </Center>
          </Box>
        </Box>
      </Tablet>
      <Mobile>
        <Box mt="-50px" mb="30px">
          <Heading
            mb="25px"
            
            className={styles.MobHeading}
            size="xl"
            fontFamily="poppins"
            textAlign="center"
            fontSize={'25px'}
            color={'teal.600'}
          >
            Github Activity
          </Heading>
          <Center
            w="90%"
            m="auto"
            className={styles.boxes}
            mt={10}
            
          >
            <GitHubCalendar username="nitinkondhari03" />
          </Center>
          <Box mt="40px">
            <Center>
              <Flex w="95%"  justifyContent="space-between">
                <Box>
                  <Flex className={styles.texts} alignItems="center">
                    <FaCode size="15px" />
                    <Text fontSize="12px" ml={2}>
                      1200+ Hours Practical Coding
                    </Text>
                  </Flex>
                  <Flex class0ame={styles.texts} mt={5} alignItems="center">
                    <RiLightbulbFlashLine size="15px" />
                    <Text fontSize="12px" ml={2}>
                      300+ Hours Data Structures & Algorithms
                    </Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <BiUserVoice size="15px" />
                    <Text fontSize="12px" ml={2}>
                      100+ Hours Soft Skill Development
                    </Text>
                  </Flex>
                </Box>
                <Spacer />

                <Box>
                  <Flex className={styles.texts} alignItems="center">
                    <AiOutlineFundProjectionScreen size="15px" />
                    <Text fontSize="12px" ml={2}>
                      5+ Projects
                    </Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <VscGraph size="15px" />
                    <Text fontSize="12px" ml={2}>
                      10+ Mini Projects
                    </Text>
                  </Flex>
                  <Flex className={styles.texts} mt={5} alignItems="center">
                    <FaGit size="15px" />
                    <Text fontSize="12px" ml={2}>
                      500+ Git Commits
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Center>
          </Box>
        </Box>
      </Mobile>
    </>
  );
};

export default GithubCalender
