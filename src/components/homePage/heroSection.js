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
        <Container
          p={{ base: "148px 24px 0", md: "151px 60px 0", xl: "151px 120px 0" }}
          maxW="1440px"
          h="100%"
        >
          <Box w={{ base: "100%", md: "576px" }}>
            <Text
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="600"
              lineHeight={{ base: "1", md: "2.25" }}
              letterSpacing={{ base: "3.75px", md: "5px" }}
              color="#fff"
              mb={{ base: "8px ", md: "0" }}
            >
              Greece’s Tech Hub
            </Text>
            <Heading
              fontSize={{ base: "100px", md: "180px" }}
              fontWeight="normal"
              lineHeight={{ base: "0.72", md: "0.7" }}
              letterSpacing={{ base: "-14.29px", md: "-25.71px" }}
              color="#faff00"
              textTransform="uppercase"
              fontFamily="BurfordRusticBookBlack"
            >
              innovation <br />
              <span style={{ color: "#fff", fontFamily: "BurfordRusticBookBlack" }}>nation</span>
            </Heading>
            <Text
              mb="31px"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="normal"
              lineHeight={{ base: "2", md: "1.75" }}
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
