import { Container, Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";

import Card from "../../utils/aboutCard";

const CardData = [
  {
    title: "The entire Tech industry was gathered for the great event",
    para: "The entire Tech industry was gathered for the great event was gathered for the great event",
    image: "https://cdn.pixabay.com/photo/2017/02/25/17/01/high-tech-2098221__340.jpg",
  },
  {
    title: "The entire Tech industry was gathered for the great event",
    para: "The entire Tech industry was gathered for the great event was gathered for the great event",
    image: "https://cdn.pixabay.com/photo/2017/02/25/17/01/high-tech-2098221__340.jpg",
  },
  {
    title: "The entire Tech industry was gathered for the great event",
    para: "The entire Tech industry was gathered for the great event was gathered for the great event",
    image: "https://cdn.pixabay.com/photo/2017/02/25/17/01/high-tech-2098221__340.jpg",
  },
];

const ReadAbout = () => {
  return (
    <Box w="100%" bgColor="#f4f4f4">
      <Container maxW="1440px" p={{ base: "0 24px 61px", md: "0 60px 136px", xl: "0 110px 146px" }}>
        <Text mb="8px" fontSize="24px" fontWeight=" bold" lineHeight="1.33" letterSpacing="-0.5px">
          Don’t only read, be read about.
        </Text>
        <Box w={{ base: "100%", sm: "342px" }} h="4px" bgColor="#B83280" mb="32px" />
        <Wrap spacing={{ base: "20px", md: "24px" }} justify={{ base: "center", md: "inherit" }}>
          {CardData.map((item, index) => (
            <WrapItem key={index}>
              <Card data={item} index={index} />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};

export default ReadAbout;
