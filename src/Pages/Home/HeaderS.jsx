import { Box, Circle, Stack } from "@chakra-ui/react";
import styles from "./Home.module.css";

function HeaderSection() {
  return (
    <Stack z-index="-1" ml={300} mt="250px" direction={["column", "row"]}>
      <Circle
        position="absolute"
        bg="white"
        opacity="0.9"
        w="300px"
        h="300px"
        alignSelf="flex-end"
        boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
      
      
      >
        <Box  className={styles.profilePicture}></Box>
      </Circle>
    </Stack>
  );
}
export default HeaderSection;
