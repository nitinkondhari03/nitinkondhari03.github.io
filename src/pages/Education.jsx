import { IoMdSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";
import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import "../App.css";
const Education = () => {
  return (
    <Box
      id="Education"
      style={{ fontFamily: "Hedvig Letters Serif" }}
      marginBottom={"30px"}
      w={"90%"}
      margin={"auto"}
      paddingTop={"40px"}
      
    >
      <Box>
        <Text
          color="black"
          fontSize={{ md: "35px", base: "28px" }}
          textAlign="center"
          marginLeft={{ md: "20px", base: "10px" }}
          marginBottom="25px"
          paddingTop={"20px"}
        >
          <span
            style={{
              borderBottom: "solid",
              padding: "0px",
              paddingTop: "5px",
              paddingBottom: "8px",
            }}
          >
            Education Qualification
          </span>
        </Text>
      </Box>
      <Box style={{display:"flex",margin:"auto",flexDirection:"row",flexWrap:"wrap",gap:"20px",justifyContent:"space-around"}}>
      <Box width={"auto"} padding={{md:"20px 40px",base:"20px 20px"}}
       boxShadow={"lg"} _hover={{boxShadow:"xl"}}  border={"1px solid black"}>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "26px",sm:"26px", base: "12px" }}
       
        margin={"auto"}
        
      >
        <Box>
          <IoMdSchool />
        </Box>
        <Box>
          <Text fontSize={{ md: "26px",sm:"22px", base: "12px" }}>
          Full Stack Web Development (Remote)
          </Text>
        </Box>
      </Flex>
      <Box paddingLeft={"25px"}>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        marginTop={"5px"}
      >
        <Box>
          <FaSchool />
        </Box>
        <Box >
          <Text fontWeight={"medium"} paddingRight={"60px"} fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Masai School</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        
        marginTop={"5px"}
      >
        <Box>
          <MdLocationPin />
        </Box>
        <Box>
          <Text fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Bengaluru, Karnataka</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        marginTop={"5px"}
      >
            
        <Box>
          <RiTimerFill />
        </Box>
        <Box>
          <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>2022–2023</Text>
        </Box>
      </Flex>
      </Box>
      </Box>
      <Box width={"auto"}  padding={{md:"20px 40px",base:"20px 20px"}}  boxShadow={"lg"} _hover={{boxShadow:"xl"}}  
       style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}  border={"1px solid black"}>
      <Flex
        
        gap={"2"}
        alignItems="center"
   
        fontSize={{ md: "26px",sm:"26px", base: "12px" }}
        margin={"auto"}
      >
        <Box>
          <IoMdSchool />
        </Box>
        <Box>
          <Text fontSize={{ md: "26px",sm:"22px", base: "12px" }}>
          B.E in Electrical Engineering
          </Text>
        </Box>
      </Flex>
      <Box  paddingLeft={"25px"}>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        
        marginTop={"5px"}
      >
        <Box>
          <FaSchool />
        </Box>
        <Box >
          <Text fontWeight={"medium"} paddingRight={"60px"} fontSize={{ md: "16px",sm:"16px", base: "8px" }}>AC Patil College of Engineering</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        
        marginTop={"5px"}
      >
        <Box>
          <MdLocationPin />
        </Box>
        <Box>
          <Text fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Mumbai University, Mumbai</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        marginTop={"5px"}
      >
            
        <Box>
          <RiTimerFill />
        </Box>
        <Box>
          <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>2016–2021</Text>
        </Box>
      </Flex>
      </Box>
      </Box>
      <Box width={"auto"}  padding={{md:"20px 40px",base:"20px 20px"}}  boxShadow={"lg"} _hover={{boxShadow:"xl"}}  
       style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}  border={"1px solid black"}>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "26px",sm:"26px", base: "12px" }}
        margin={"auto"}
      >
        <Box>
          <IoMdSchool />
        </Box>
        <Box>
          <Text fontSize={{ md: "26px",sm:"22px", base: "12px" }}>
          Higher Secondary (Science)
          </Text>
        </Box>
      </Flex>
      <Box paddingLeft={"25px"}>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        
        marginTop={"5px"}
      >
        <Box>
          <FaSchool />
        </Box>
        <Box >
          <Text fontWeight={"medium"} paddingRight={"60px"} fontSize={{ md: "16px",sm:"16px", base: "8px" }}>TVT College Of Science,Maharashtra</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        
        marginTop={"5px"}
      >
        <Box>
          <MdLocationPin />
        </Box>
        <Box>
          <Text fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Maharashtra, Palghar</Text>
        </Box>
      </Flex>
      <Flex
        justifyContent={"left"}
        gap={"2"}
        alignItems="center"
        fontSize={{ md: "16px",sm:"16px", base: "8px" }}
        marginTop={"5px"}
      >
            
        <Box>
          <RiTimerFill />
        </Box>
        <Box>
          <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>2015–2016</Text>
        </Box>
      </Flex>
      </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Education;
