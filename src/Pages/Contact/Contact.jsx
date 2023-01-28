import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import styles from "./contact.module.css";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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

const initialInput = {
  user_name: "",
  user_email: "",
  message: "",
};
 const Contact = () => {
  const form = useRef();

  const toast = useToast();
  const { colorMode } = useColorMode();
  const [input, setInput] = useState(initialInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      input.user_name === "" ||
      input.user_email === "" ||
      input.message === ""
    ) {
      toast({
        title: `input feild is empty`,
        status: "error",
        isClosable: true,
      });
    } else {
      emailjs
        .sendForm(
          "service_ni42gpi",
          "template_vhl15p5",
          form.current,
          "-aEsO9Cy5cXe58Gfw"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title: `Message Send Successfully!`,
              status: "success",
              isClosable: true,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <Desktop>
        <Box pt={5} pb={10} fontFamily="poppins" textAlign="center">
          <Heading
        
            className={styles.Heading}
            mt={5}
            fontSize='35px'
            color={'teal.600'}
          
          >
            Contact With Me
          </Heading>
          <Flex ml={20} mt={10} mr={10} alignItems="center">
            <Center>
              <Box  ml={20}>
                <Center>
                  <Box>
                    <Flex alignItems="center">
                      <Center>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/nitinkondhari03"
                        >
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsGithub
                                size={30}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Github
                              </Text>
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/nitinkondhari/"
                        >
                          <Box ml={10} className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsLinkedin
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Linkedin
                              </Text>
                            </Flex>
                          </Box>
                        </a>
                      </Center>
                    </Flex>
                    <Flex mt={5}>
                      <Center>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="mailto:nitinkondhari85@gmail.com"
                        >
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <SiGmail
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Gmail
                              </Text>
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://api.whatsapp.com/send/?phone=9145160400&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
                        >
                          <Box ml={10} className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsTelephoneFill
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                9145160500
                              </Text>
                            </Flex>
                          </Box>
                        </a>
                      </Center>
                    </Flex>
                  </Box>
                </Center>
                <Center>
                  <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <Input
                      type="text"
                      value={input.user_name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                     
                      borderColor={'1px solid teal'}
                      name="user_name"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      mt={5}
                      type="email"
                      value={input.user_email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      borderColor={'1px solid teal'}
                      name="user_email"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />

                    <Textarea
                      value={input.message}
                      onChange={handleInputChange}
                      mt={5}
                      placeholder="Type Your Message"
                      borderColor={'1px solid teal'}
                      errorBorderColor="crimson"
                      name="message"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      w="100%"
                      type="submit"
                      value="Send"
                      bg={'teal'}
                      color="white"
                      mt={5}
                      mb={10}
                      _hover={{ background: "#262f82" }}
                    />
                  </form>
                </Center>
              </Box>
            </Center>

            <Spacer />
            <Flex ml={10} w="50%" mt={10} mr={10}>
              <Center>
                <Box  ml={10} className={styles.img}></Box>
              </Center>
              {/* </Box> */}
            </Flex>
          </Flex>
          <Box>
            <Text className={styles.texts}>
              Designed and Developed by Nitin Kondhari,© Copyright 2023. All
              rights reserved.
            </Text>
          </Box>
        </Box>
      </Desktop>
      <Tablet>
        <Box pt={10} pb={10} fontFamily="poppins" textAlign="center">
          <Heading
           
            className={styles.TabHeading}
            mt={5}
           
            color={'teal.600'}
          >
           Contact With Me
          </Heading>
          <Center>
            <Stack mt={10} alignItems="center">
              <Center>
                <Box data-aos="zoom-in">
                  <Center>
                    <Box>
                      <Stack alignItems="center">
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/nitinkondhari03"
                          >
                            <Box className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <BsGithub
                                  size={30}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  Github
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/nitinkondhari/"
                          >
                            <Box ml={10} className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <BsLinkedin
                                  size={25}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  Linkedin
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                        </Center>
                      </Stack>
                      <Flex mt={5}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:nitinkondhari85@gmail.com"
                          >
                            <Box className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <SiGmail
                                  size={25}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  Gmail
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://api.whatsapp.com/send/?phone=9145160400&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
                          >
                            <Box ml={10} className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <BsTelephoneFill
                                  size={25}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  9145160500
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                        </Center>
                      </Flex>
                    </Box>
                  </Center>
                  <Center>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className={styles.form}
                    >
                      <Input
                        type="text"
                        value={input.user_name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        borderColor={'1px solid teal'}
                        name="user_name"
                        errorBorderColor="crimson"
                        _placeholder={
                          colorMode === "light"
                            ? { opacity: 1, color: "black" }
                            : { opacity: 0.5, color: "white" }
                        }
                      />
                      <Input
                        mt={5}
                        type="email"
                        value={input.user_email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        borderColor={'1px solid teal'}
                        name="user_email"
                        errorBorderColor="crimson"
                        _placeholder={
                          colorMode === "light"
                            ? { opacity: 1, color: "black" }
                            : { opacity: 0.5, color: "white" }
                        }
                      />

                      <Textarea
                        value={input.message}
                        onChange={handleInputChange}
                        mt={5}
                        placeholder="Type Your Message"
                        borderColor={'1px solid teal'}
                        errorBorderColor="crimson"
                        name="message"
                        _placeholder={
                          colorMode === "light"
                            ? { opacity: 1, color: "black" }
                            : { opacity: 0.5, color: "white" }
                        }
                      />
                      <Input
                        w="100%"
                        type="submit"
                        value="Send"
                        bg="teal"
                        color="white"
                        mt={5}
                        mb={10}
                        _hover={{ background: "#262f82" }}
                      />
                    </form>
                  </Center>
                </Box>
              </Center>

              <Spacer />

              <Stack w="70%" mt={10}>
                <Center>
                  <Box data-aos="zoom-in" className={styles.img}></Box>
                </Center>
                {/* </Box> */}
              </Stack>
            </Stack>
          </Center>

          <Box>
            <Text className={styles.texts} fontSize="13px">
              Designed and Developed by Nitin Kondhari,© Copyright 2023. All
              rights reserved.
            </Text>
          </Box>
        </Box>
      </Tablet>
      <Mobile>
        <Box pt={10} pb={10} fontFamily="poppins" textAlign="center">
          <Heading
            data-aos="zoom-in"
            className={styles.MobHeading}
            mt={5}
            color='teal.600'
            fontFamily="poppins"
          >
            Contact With Me
          </Heading>
          <Center>
            <Stack mt={10} alignItems="center">
              <Center>
                <Box data-aos="zoom-in">
                  <Center>
                    <Box>
                      <Stack alignItems="center">
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/nitinkondhari03"
                          >
                            <Box className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <BsGithub
                                  size={30}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  Github
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/nitinkondhari/"
                          >
                            <Box ml={10} className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <BsLinkedin
                                  size={25}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  Linkedin
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                        </Center>
                      </Stack>
                      <Flex mt={5}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:nitinkondhari85@gmail.com"
                          >
                            <Box className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <SiGmail
                                  size={25}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  Gmail
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://api.whatsapp.com/send/?phone=9145160400&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
                          >
                            <Box ml={10} className={styles.iconBox}>
                              <Flex justifyContent="center" alignItems="center">
                                <BsTelephoneFill
                                  size={25}
                                  style={{ marginRight: "10px" }}
                                />
                                <Text fontFamily="poppins" fontSize="22px">
                                  9145160500
                                </Text>
                              </Flex>
                            </Box>
                          </a>
                        </Center>
                      </Flex>
                    </Box>
                  </Center>
                  <Center>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className={styles.form}
                    >
                      <Input
                        type="text"
                        value={input.user_name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        borderColor={'1px solid teal'}
                        name="user_name"
                        errorBorderColor="crimson"
                        _placeholder={
                          colorMode === "light"
                            ? { opacity: 1, color: "black" }
                            : { opacity: 0.5, color: "white" }
                        }
                      />
                      <Input
                        mt={5}
                        type="email"
                        value={input.user_email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        borderColor={'1px solid teal'}
                        name="user_email"
                        errorBorderColor="crimson"
                        _placeholder={
                          colorMode === "light"
                            ? { opacity: 1, color: "black" }
                            : { opacity: 0.5, color: "white" }
                        }
                      />

                      <Textarea
                        value={input.message}
                        onChange={handleInputChange}
                        mt={5}
                        placeholder="Type Your Message"
                        borderColor={'1px solid teal'}
                        errorBorderColor="crimson"
                        
                        name="message"
                        _placeholder={
                          colorMode === "light"
                            ? { opacity: 1, color: "black" }
                            : { opacity: 0.5, color: "white" }
                        }
                      />
                      <Input
                        w="100%"
                        type="submit"
                        value="Send"
                        bg="teal"
                        color="white"
                        mt={5}
                        mb={10}
                        _hover={{ background: "#262f82" }}
                      />
                    </form>
                  </Center>
                </Box>
              </Center>

              <Spacer />

              <Stack w="70%" mt={10}>
                <Center>
                  <Box data-aos="zoom-in" className={styles.img}></Box>
                </Center>
                {/* </Box> */}
              </Stack>
            </Stack>
          </Center>

          <Box>
            <Text className={styles.texts} fontSize="13px">
              Designed and Developed by Nitin Kondhari,© Copyright 2023. All
              rights reserved.
            </Text>
          </Box>
        </Box>
      </Mobile>
    </>
  );
};

export default Contact
