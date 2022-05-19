import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
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
      <Box bgColor="#b4449ac4" w="100%" minH="545px">
        <Container p="58px 115px 0" maxW="1440px" h="100%" pos="relative">
          <Heading
            fontSize="72px"
            fontWeight=" 900"
            lineHeight="0.78"
            letterSpacing="-8.18px"
            color="#fff"
            mb="14px"
            display="inline-flex"
            alignItems="flex-end"
            textTransform="uppercase"
          >
            Activate your involvement
            <Box
              style={{
                width: "31px",
                height: " 4px",
                backgroundColor: "#faff00",
                marginLeft: "7px",
              }}
            />
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
          <Box pos="absolute" w="100%">
            <Flex align="center" justify="space-between" maxW="1210px">
              <ActivateCard />
              <ActivateCard />
              <ActivateCard />
              <ActivateCard />
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Activate;
