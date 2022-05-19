import { Box, Container, Flex, Wrap, Heading, Text, WrapItem } from "@chakra-ui/react";
import ActivateCard from "../../utils/activateCard";
const Activate = () => {
  return (
    <Box
      w="100%"
      minH="545px"
      bgImage={"url(/nation-bg.webp)"}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Box bgColor="#b4449ac4" w="100%" minH="545px" pos="relative">
        <Container
          p={{ base: "55px 24px 0", md: "58px 60px 0", xl: "58px 115px 0" }}
          maxW="1440px"
          h="100%"
        >
          <Heading
            fontSize="72px"
            fontWeight="normal"
            lineHeight="0.78"
            letterSpacing="-8.18px"
            color="#fff"
            mb={{ base: "18px", md: "14px" }}
            textTransform="uppercase"
            fontFamily="BurfordRusticBookBlack"
            pos="relative"
            _after={{
              content: `""`,
              width: "31px",
              height: "4px",
              pos: "absolute",
              backgroundColor: "#faff00",
              bottom: "0",
            }}
          >
            Activate your involvement
          </Heading>

          <Text
            fontSize="14px"
            fontWeight="normal"
            lineHeight="1.71"
            letterSpacing="-0.18px"
            color="#fff"
            mb="37px"
          >
            We are YOU first. Look into what we can do to get you started. Welcome to your go to
            <br />
            sharing platform. Welcome to the platform that can help you get to Greece, no matter
            what the objective may be .Transformation in the <br /> Greek ecosystem hit the ground
            running when the network started sharing knowledge and collaborating.
          </Text>

          <Wrap
            m="0 auto"
            maxW="1210px"
            justify="center"
            pos="relative"
            zIndex="1"
            spacing={{ base: "18px", xl: "16px" }}
          >
            <WrapItem>
              <ActivateCard />
            </WrapItem>
            <WrapItem>
              <ActivateCard />
            </WrapItem>
            <WrapItem>
              <ActivateCard />
            </WrapItem>
            <WrapItem>
              <ActivateCard />
            </WrapItem>
          </Wrap>
        </Container>
        <Box pos="absolute" bottom="0" left="0" w="100%" h="15px" backgroundColor="#faff00" />
      </Box>
    </Box>
  );
};

export default Activate;
