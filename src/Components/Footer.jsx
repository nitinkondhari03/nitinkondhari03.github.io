import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsHeartFill } from "react-icons/bs";

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('blue.50', 'blue.900')}
      color={useColorModeValue("black")}
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center'}}
        align={{ base: 'center', md: 'center' }}>
        <HStack>
        <Text fontWeight={700}>Made by</Text> 
        <BsHeartFill color='red' />
        <Text fontWeight={700}> Manish Nishad</Text>
        </HStack>
        
      </Container>
    </Box>
  );
}