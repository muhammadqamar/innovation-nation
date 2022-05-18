import { Box } from "@chakra-ui/react";
import HeroSection from "./heroSection";
import StartUp from "./startUp";
import ReadAbout from "./readAbout";
import Activate from "./activate";
import OutliersPodcast from "./outliersPodcast";

const Index = () => {
  return (
    <Box>
      <HeroSection />
      <StartUp />
      <ReadAbout />
      <Activate />
      <OutliersPodcast />
    </Box>
  );
};

export default Index;
