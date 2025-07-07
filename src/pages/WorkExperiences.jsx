import { MdWork } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";
import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import "../App.css";
const WorkExperiences = () => {
  return (
    
    <Box
          id="Experiences"
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
                Work Experiences
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
              MERN Stack Developer Intern (Remote)
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
              <Text fontWeight={"medium"} paddingRight={"60px"} fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Revogue Retail Pvt Ltd</Text>
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
              <Text fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Belapur, Navi Mumbai, Maharashtra -400614</Text>
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
            <FaLaptopCode />
            </Box>
            <Box>
              <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Remote (Work from Home)</Text>
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
              <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>May 2024 – Nov 2024</Text>
            </Box>
          </Flex>
          </Box>
          </Box>
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
              Web Developer 
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
              <Text fontWeight={"medium"} paddingRight={"60px"} fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Weblord Infotech & Education Pvt Ltd</Text>
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
              <Text fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Nalasopara West, Palghar, Maharashtra 401203</Text>
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
            <FaLaptopCode />
            </Box>
            <Box>
              <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Work from office</Text>
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
              <Text paddingRight={"8px"}  fontSize={{ md: "16px",sm:"16px", base: "8px" }}>Dec 2024 – Present</Text>
            </Box>
          </Flex>
          </Box>
          </Box>
          </Box>
        </Box>
    
  );
};

export default WorkExperiences;
