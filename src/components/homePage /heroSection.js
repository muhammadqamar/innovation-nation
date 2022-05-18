import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bgImage={"url(/hero-bg.webp)"}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Box w="100%" h="100%" bgColor="rgba(15, 194, 188 , 43%)">
        <Container pt="200px" maxW="container.xl" h="100%">
          <Text fontSize="27px" fontWeight="400" letterSpacing="3px">
            JOIN THE
          </Text>
          <Heading mb="16px" fontWeight="bold" fontSize="42px">
            GREEK TECH MOVEMENT
          </Heading>
          <Text mb="16px" maxW="450px" fontSize="18px" fontWeight="400">
            Community of shared tech aspirations. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Text>
          <Button bgColor="#000" color="#fff" borderRadius="0" fontSize="14px">
            BECOME A CITIZEN
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
