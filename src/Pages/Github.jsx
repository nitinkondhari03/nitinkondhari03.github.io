import GitHubCalendar from 'react-github-calendar';
import React from 'react'
import { Box, VStack, Image, useColorModeValue, Heading } from '@chakra-ui/react';

const Github = () => {
  return (
    <>
        <Box 
          align={'center'} 
          py={10}>
          <Heading
            fontWeight={700}
            marginBottom={10}
            fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }}
            lineHeight={'110%'}>
            My Github Statistics
          </Heading>
        <GitHubCalendar blockSize={15} blockMargin={5} fontSize={16} bg={useColorModeValue('blue.50', 'blue.400')} username="MAKNISH">
          </GitHubCalendar>
            <VStack spacing='20px' py={6}>
                <Image align={'center'} src="https://github-readme-streak-stats.herokuapp.com/?user=maknish&" alt="maknish">
                </Image>
            </VStack>
        </Box>
        
    </>
    
  )
}

export default Github