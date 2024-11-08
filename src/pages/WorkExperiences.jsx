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
          padding={{md:"20px 40px",base:"20px 20px"}}
          boxShadow={"lg"}
          border={"1px solid black"}
          _hover={{ boxShadow: "xl" }}
        >
          <Flex
            justifyContent={"left"}
            gap={"2"}
            alignItems="center"
            fontSize={{ md: "26px",sm:"26px", base: "12px" }}
            margin={"auto"}
          >
            <Box>
              <MdWork />
            </Box>
            <Box>
              <Text fontSize={{ md: "26px",sm:"22px", base: "12px" }}>
                Intern Web Developer
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
                <HiBuildingOffice2 />
              </Box>
              <Box>
                <Text
                  fontWeight={"medium"}
                  paddingRight={"60px"}
                  fontSize={{ md: "16px",sm:"16px", base: "8px" }}
                >
                  REVOGUE RETAIL PVT LTD
                </Text>
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
                <Text fontSize={{ md: "16px",sm:"16px", base: "8px" }}>
                  Belapur, Navi Mumbai, Maharashtra -400614
                </Text>
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
                <Text
                  paddingRight={"8px"}
                  fontSize={{ md: "16px",sm:"16px", base: "8px" }}
                >
                  Remote (Work from Home)
                </Text>
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
                <Text
                  paddingRight={"8px"}
                  fontSize={{ md: "16px",sm:"16px", base: "8px" }}
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
