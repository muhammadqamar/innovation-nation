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
      <Box
        w="100%"
        h="100%"
        bgImage={"url(/hero-bg-color.svg)"}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      >
        <Container p="151px 120px 0" maxW="1440px" h="100%">
          <Box w="576px">
            <Text
              fontSize="32px"
              fontWeight="600"
              lineHeight="2.25"
              letterSpacing="5px"
              color="#fff"
            >
              Greece’s Tech Hub
            </Text>
            <Heading
              fontSize="180px"
              fontWeight="900"
              lineHeight="0.4"
              letterSpacing="-25.71px"
              color="#faff00"
            >
              innovation <span style={{ color: "#fff" }}>nation</span>
            </Heading>
            <Text
              mb="31px"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="1.75"
              letterSpacing="normal"
              color="#fff"
            >
              Innovation in Greece is no longer a vision, it’s a movement. Pairing beaches and good
              weather with innovation and entrepreneurship for years, and we’re just getting
              started.
            </Text>
            <Button
              fontSize="16px"
              fontWeight="500"
              lineHeight="1.5"
              letterSpacing="1px"
              w="211px"
              bgColor="#fff"
              color="#000"
              borderRadius="0"
            >
              BECOME A CITIZEN
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
