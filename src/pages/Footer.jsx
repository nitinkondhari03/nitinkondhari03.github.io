import { Text,Box } from '@chakra-ui/react';
const Footer = () => {
 
  return (
    <Box  borderBottomRadius={"100px"} borderTopRadius="10px" bg="black" >
      <Text p="1%" pt="2%" color={'white'} fontSize={"lg"} fontWeight={"bold"}>Designed and Developed by Nitin Kondhari © Copyright 2023. All rights reserved.</Text>
    </Box>
  );
};

export default Footer
