import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';




// const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavLink = ({children}) => (
  <Link
    fontSize={'18px'}
    fontWeight={700}
    px={3}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
    >
    {children}
  </Link>
);

export default function Navbar({handleHome, handleAbout, handleProjects, handleContacts,handletechStack,handlegithubCalenders}) {
  const { isOpen, onOpen, onClose } = useDisclosure();


const  handleClick=()=>{
  console.log("yes")
        window.open('https://drive.google.com/file/d/1MIKbQePBvVrZoP3Wk-bWH0oA5oY_FyVI/view?usp=share_link')
    }
  return (
    <>
      <Box id="nav-menu" bg={"#319795"} px={4} position={'fixed'} zIndex={3}  width={'100%'}  >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Text color={'white'}>𝒩𝒾𝓉𝒾𝓃 𝒦𝑜𝓃𝒹𝒽𝒶𝓇𝒾</Text>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
            
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>

            <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', lg: 'flex' }}    color={'white'}>
              
             <div onClick={handleHome}> <NavLink  >Home</NavLink></div>
             <div onClick={handleAbout}>  <NavLink>About</NavLink></div>
             <div onClick={handletechStack}>  <NavLink>Skills</NavLink></div>
            
             <div onClick={handleProjects}> <NavLink>Projects</NavLink></div>
             <div onClick={handleContacts}>    <NavLink>Contacts</NavLink></div>
             <div onClick={handleClick}>  <a href="Nitin-Kondhari-Resume.pdf"  download="Nitin-Kondhari-Resume.pdf"  >
                    
                    <Text fontWeight={'bold'} fontSize={'19px'}>Resume</Text>  
                    </a></div>
             
          
             
            </HStack>
            </Menu>
          
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4} color='white'>
              <NavLink><div onClick={handleHome}>Home</div></NavLink>
              <NavLink><div onClick={handleAbout}>About</div></NavLink>
              <NavLink><div onClick={handletechStack}>Skills</div></NavLink>
              <NavLink><div onClick={handleProjects}>Projects</div></NavLink>
              <NavLink><div onClick={handleContacts}>Contacts</div></NavLink>
              <div onClick={handleClick}> <a href="Nitin-Kondhari-Resume.pdf"  download="Nitin-Kondhari-Resume.pdf" ><Text fontSize={'18px'} ml='10px' fontWeight="bold">Resume</Text></a></div>
          
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <Box p={8}>
        <Home />
        <About ref={about}/>
        <Skills />
      </Box> */}
      
    </>
  );
}