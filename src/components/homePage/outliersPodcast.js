import { Container, Box, Flex, Text, Heading, Button, Img, Wrap, WrapItem } from "@chakra-ui/react";
import OutliersCard from "../../utils/outliersCard";

const data = [
  {
    title: "Cameo",
    time: "33:22",
  },
  {
    title: "TileDB",
    time: "33:22",
  },
  {
    title: "Skroutz",
    time: "33:22",
  },
  {
    episTitle: "Explore All Episodes",
    epis: "24 Episodes",
  },
];

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
        <Container
          p={{ base: "95px 24px 34px", md: "113px 60px 90px", xl: "113px 110px 90px" }}
          maxW="1440px"
          h="100%"
        >
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
          <Box w="225px" h="5px" bgColor="#B83280" mb={{ base: "38px", md: "34px" }} />

          <Flex justify="space-between" flexWrap="wrap">
            <Box w="259px" mb={{ base: "32px", xl: "0" }}>
              <Heading
                fontSize="56px"
                fontWeight="normal"
                lineHeight="0.79"
                letterSpacing="-6.22px"
                color="#000"
                mb={{ base: "9px", md: "18px" }}
                fontFamily="BurfordRusticBookBlack"
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

            <Wrap
              w="884px"
              spacing={{ base: "16px", xl: "12px" }}
              justify={{ base: "center", md: "inherit" }}
            >
              {data.map((item, index) => (
                <WrapItem key={index}>
                  <OutliersCard item={item} index={index} />
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default OutliersPodcast;
