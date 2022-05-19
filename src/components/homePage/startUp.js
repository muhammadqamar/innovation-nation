import { Box, Button, Flex, Heading, Image, Img, Text } from "@chakra-ui/react";

const StartUp = () => {
  return (
    <Box w="100%" bgColor="#f4f4f4" pb={{ base: "48px", xl: "92px" }}>
      <Flex
        maxW="1440px"
        minH="640px"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        m=" auto "
        p={{ base: "74px 24px 0 ", md: "30px 55px 0 ", xl: "56px 71px 0 134px" }}
        bgImage={{ base: "url(/nation-mobile-bg.webp)", md: "url(/nation-2-bg.webp)" }}
        bgRepeat="no-repeat"
        bgPosition="top left"
        bgSize={{ base: "100% 875px", md: "970px" }}
      >
        <Box>
          <Heading
            fontSize={{ base: "48px", md: "64px" }}
            fontWeight="normal"
            lineHeight={{ base: "1.04", md: "1" }}
            letterSpacing={{ base: "-5.45px", md: "-7.27px" }}
            color="#fff"
            textTransform="uppercase"
            mb={{ base: "13px", lg: "6px" }}
            fontFamily="BurfordRusticBookBlack"
          >
            The Greek Tech Industry is a community with common goals, aspirations and state of mind
          </Heading>

          <Text
            fontSize="24px"
            fontWeight="500"
            lineHeight={{ base: "1.58", md: "2.67" }}
            letterSpacing="-0.42px"
            color="#fff"
            mb={{ base: "13px", lg: "0" }}
          >
            Why join? The real question is why now.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="normal"
            lineHeight={{ base: "2", md: "1.75" }}
            letterSpacing="normal"
            color="#fff"
            mb={{ base: "32px", md: "28px" }}
            w={{ base: "100%", xl: "604px" }}
          >
            Athens has evolved into a centralized tech hub, made by a community of successful
            high-impact entrepreneurs. We have found the sweet spot of collaboration between the
            public and private sectors, with one common goal - fueling leaders and founders to
            accelerate Greece’s tech scene
          </Text>
          <Button
            rightIcon={<Img src="/arrow-right.svg" w="16px" alt="logo" />}
            bgColor="#ECC94B"
            color="#000"
            borderRadius="0"
            fontSize="16px"
            fontWeight="500"
            lineHeight="1.5"
            letterSpacing="1px"
          >
            SEE MORE ETC
          </Button>
        </Box>

        <Box
          w={{ base: "100%", lg: "350px", xl: "504px" }}
          h={{ base: "365px", md: "504px" }}
          flexShrink={{ base: "inherit", lg: "0" }}
          mt={{ base: "46px", lg: "0" }}
          border="solid 1px #979797"
          backgroundColor="#d8d8d8"
        ></Box>
      </Flex>
    </Box>
  );
};

export default StartUp;
