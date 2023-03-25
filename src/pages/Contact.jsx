import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import "../styles/contact.css"

const Contacts = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "white",
        fontFamily: "monospace",
        fontSize: "15px",
        color:'black'
      }}
      padding={{ md: "30px", base: "15px" }}
      id="contact"
      
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
          CONTACTS
        </span>
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 1, lg: 1 }}
          padding={{ base: "20px", sm: "20px", md: "45px", lg: "45px" }}
          paddingTop={{ base: "8px", sm: "8px", md: "8px", lg: "8px" }}
        >
          <Box className="contact_cards">
            <Box className="icon">
              <AiOutlineMail />
            </Box>
            <Text className="contact_card_header">Email</Text>
            <a
              href="mailto:nitinkondhari85@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Text className="content"  id="contact-email">nitinkondhari85@gmail.com</Text>
            </a>
          </Box>
          <Box className="contact_cards">
            <Box className="icon">
              <AiOutlinePhone />
            </Box>
            <Text className="contact_card_header">Contact Number</Text>
            <Text className="content"  id="contact-phone">+91 9145160400</Text>
          </Box>
          <Box className="contact_cards">
            <Text className="contact_card_header-social">Social Media</Text>
            <Box className="icon">
              <a
              id="contact-linkedin"
                href="https://www.linkedin.com/in/nitinkondhari/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
              id="contact-github"
                href="https://github.com/nitinkondhari03"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
            </Box>
          </Box>
        </SimpleGrid>
        <Box className="form">
          <Text color={"black"} fontSize="25px">
            Send me a message
          </Text>
          <form
            action="https://getform.io/f/4c7f4c3d-b837-48eb-a797-0c571063d3f4"
            method="POST"
          >
            <Input
              mt="5"
              name="name"
              placeholder="Your Full Name"
              color="black"
            />

            <Input
              mt="10"
              type="email"
              name="email"
              placeholder="Your Email Adress"
              color="black"
            />

            <Textarea
              name="message"
              mt="10"
              placeholder="Enter your Message here"
              color="black"
            />
            <Button
            
              mt="8"
              bg={"black"}
              _hover={{
                bg: "rgb(11,25,46)",
              }}
              fontSize={"20px"}
            
              color="white"
            >
              Submit
            </Button>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contacts;