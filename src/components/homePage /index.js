import { Box } from "@chakra-ui/react";
import HeroSection from "./heroSection";
import StartUp from "./startUp";
import ReadAbout from "./readAbout";
import Activate from "./activate";
import OutliersPodcast from "./outliersPodcast";
import SupporterNation from "./supporterNation";

const Index = () => {
  return (
    <Box>
      <HeroSection />
      <StartUp />
      <ReadAbout />
      <Activate />
      <OutliersPodcast />
      <SupporterNation />
    </Box>
  );
};

export default Index;
