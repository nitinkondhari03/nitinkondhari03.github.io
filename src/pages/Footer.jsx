import { Text,Box } from '@chakra-ui/react';
const Footer = () => {
 
  return (
    <Box style={{ fontFamily: "Hedvig Letters Serif"}}   borderTop={'1px solid black'} >
      <Text p="1%"  color={'black'} fontSize={"1.3Vmax"} fontWeight={"bold"}>Designed and Developed by Nitin Kondhari © Copyright 2023. All rights reserved.</Text>
    </Box>
  );
};

export default Footer
