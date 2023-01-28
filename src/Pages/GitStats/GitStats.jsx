import { Box, Image } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1008 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1007 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return isMobile ? children : null;
};

const GitStats = () => {
  return (
    <>
      <Desktop>
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingTop="50px"
        >
          <Box width="50%">
            <Image
              width="100%"
              height="200px"
              src="https://streak-stats.demolab.com/?user=nitinkondhari03&theme=highcontrast&background=008970"
              alt="Github Contributions"
            />
          </Box>
          <Box width="50%">
            <Image
              width="170%"
              height="200px"
              src="https://github-readme-stats.vercel.app/api?username=nitinkondhari03&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff"
              alt="Github Stats"
            />
          </Box>
        </Box>
      </Desktop>

      <Tablet>
        <Box
          width="80%"
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box  w='500px'>
            <Image
              src="https://streak-stats.demolab.com/?user=nitinkondhari03&theme=highcontrast&background=008970"
              alt="Github Contributions"
            />
          </Box>
          <Box  m='auto' marginTop="20px" marginBottom="50px" >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=nitinkondhari03&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff"
              alt="Github Stats"
            />
          </Box>
        </Box>
      </Tablet>

      <Mobile>
        <Box
          width="90%"
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Image
              src="https://streak-stats.demolab.com/?user=nitinkondhari03&theme=highcontrast&background=008970"
              alt="Github Contributions"
            />
          </Box>
          <Box marginTop="20px" marginBottom="50px">
            <Image
              width="100%"
              src="https://github-readme-stats.vercel.app/api?username=nitinkondhari03&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true&bg_color=008970&title_color=ffffff&text_color=fff"
              alt="Github Stats"
            />
          </Box>
        </Box>
      </Mobile>
    </>
  );
};

export default GitStats;
