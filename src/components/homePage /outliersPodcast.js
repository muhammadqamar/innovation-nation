import { Container, Box, Flex, Text, Heading, Button, Img } from "@chakra-ui/react";
import OutliersCard from "../../utils/outliersCard";

const OutliersPodcast = () => {
  return (
    <Box
      w="100%"
      minH="517px"
      bgImage={"url(/nation-bg.webp)"}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Box bgColor="#faff009e" w="100%" minH="517px">
        <Container p="132px 110px 90px" maxW="1440px" h="100%">
          <Text
            fontSize="24px"
            fontWeight=" 600"
            lineHeight="1.33"
            letterSpacing="0.8px"
            color="#000"
            textTransform="uppercase"
          >
            Not convinced? Let the ecosystem drivers do the talking
          </Text>
          <Box w="225px" h="5px" bgColor="#B83280" mb="34px" />

          <Flex justify="space-between">
            <Box w="259px">
              <Heading
                fontSize="56px"
                fontWeight=" 900"
                lineHeight="0.79"
                letterSpacing="-6.22px"
                color="#000"
                mb="18px"
                textTransform="uppercase"
              >
                outliers podcast
              </Heading>
              <Text
                fontSize="16px"
                fontWeight=" 500"
                lineHeight="1.38"
                letterSpacing="normal"
                color="#000"
              >
                Our team’s podcast featuring local entrepreneurs
              </Text>
            </Box>

            <Flex maxW="884px" justify="space-between">
              <OutliersCard />
              <OutliersCard />
              <OutliersCard />
              <OutliersCard />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default OutliersPodcast;
