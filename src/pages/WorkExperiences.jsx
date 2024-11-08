import { MdWork } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { Box,Text, Flex } from "@chakra-ui/react";
import { FaLaptopCode } from "react-icons/fa";

import React from "react";
import "../App.css";
const WorkExperiences = () => {
  return (
    <Box
      id="WorkExperiences"
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
          marginBottom="40px"
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
      <Box
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        <Box
          width={"auto"}
          padding={"20px 100px"}
          boxShadow={"lg"}
          _hover={{ boxShadow: "xl" }}
        >
          <Flex
            justifyContent={"left"}
            gap={"2"}
            alignItems="center"
            fontSize={{ md: "26px", base: "22px" }}
            margin={"auto"}
          >
            <Box>
              <MdWork />
            </Box>
            <Box>
              <Text fontSize={{ md: "26px", base: "22px" }}>
                Intern Web Developer
              </Text>
            </Box>
          </Flex>
          <Box paddingLeft={"25px"}>
            <Flex
              justifyContent={"left"}
              gap={"2"}
              alignItems="center"
              fontSize={{ md: "16px", base: "14px" }}
              marginTop={"5px"}
            >
              <Box>
                <HiBuildingOffice2 />
              </Box>
              <Box>
                <Text
                  fontWeight={"medium"}
                  paddingRight={"60px"}
                  fontSize={{ md: "20px", base: "18px" }}
                >
                  REVOGUE RETAIL PVT LTD
                </Text>
              </Box>
            </Flex>
            <Flex
              justifyContent={"left"}
              gap={"2"}
              alignItems="center"
              fontSize={{ md: "16px", base: "14px" }}
              marginTop={"5px"}
            >
              <Box>
                <MdLocationPin />
              </Box>
              <Box>
                <Text fontSize={{ md: "20px", base: "18px" }}>
                  Belapur, Navi Mumbai, Maharashtra -400614
                </Text>
              </Box>
            </Flex>
            <Flex
              justifyContent={"left"}
              gap={"2"}
              alignItems="center"
              fontSize={{ md: "16px", base: "14px" }}
              marginTop={"5px"}
            >
              <Box>
                <FaLaptopCode />
              </Box>
              <Box>
                <Text
                  paddingRight={"8px"}
                  fontSize={{ md: "20px", base: "18px" }}
                >
                  Remote (Work from Home)
                </Text>
              </Box>
            </Flex>
            <Flex
              justifyContent={"left"}
              gap={"2"}
              alignItems="center"
              fontSize={{ md: "16px", base: "14px" }}
              marginTop={"5px"}
            >
              <Box>
                <RiTimerFill />
              </Box>
              <Box>
                <Text
                  paddingRight={"8px"}
                  fontSize={{ md: "20px", base: "18px" }}
                >
                  May 2024 – Present
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkExperiences;
