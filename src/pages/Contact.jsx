import React,{useState} from "react";
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
import "../styles/contact.css";

const Contacts = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("")
  let handleSubmit = async (e) => {
    e.preventDefault();
    let obj={
      name:name,
      email:email,
      message:message
    }
 
    try {
      let res = await fetch("https://cute-rose-gorilla-sock.cyclic.app/api/v1/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
     
      let resJson = await res.json();
     alert(resJson.message)
    
    } catch (err) {
      console.log("Can't send message same error");
    }
    setName("")
    setEmail("")
    setMessage("")
  };
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "white",
        fontFamily: "monospace",
        fontSize: "15px",
        color: "black",
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
          Contacts
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
              <a
                href="mailto:nitinkondhari85@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </Box>
            <Text className="contact_card_header">Email</Text>
            <a
              href="mailto:nitinkondhari85@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Text className="content" id="contact-email">
                nitinkondhari85@gmail.com
              </Text>
            </a>
          </Box>
          <Box className="contact_cards">
            <Box className="icon">
              <AiOutlinePhone />
            </Box>
            <Text className="contact_card_header">Contact Number</Text>
            <Text className="content" id="contact-phone">
              +91 8850841724
            </Text>
          </Box>
          <Box className="contact_cards">
            <Text className="contact_card_header-social">Social Media</Text>
            <Box className="icon">
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/nitinkondhari/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <BsLinkedin />
              </a>
              <a
                id="contact-github"
                href="https://github.com/nitinkondhari03"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
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
          <form onSubmit={(e)=>handleSubmit(e)}>
            <Input
             onChange={(e)=>setName(e.target.value)}
             value={name}
              mt="5"
              name="name"
              placeholder="Your Full Name"
              color="black"
              required
            />

            <Input
             onChange={(e) => setEmail(e.target.value)}
             value={email}
              mt="10"
              type="email"
              name="email"
              placeholder="Your Email Adress"
              color="black"
              required
            />

            <Textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              mt="10"
              placeholder="Enter your Message here"
              color="black"
              required
            />
            <Button
              type="submit"
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