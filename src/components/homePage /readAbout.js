import { Container, Box, Flex, Text } from "@chakra-ui/react";

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
    <Container maxW="1440px" p="0 110px 146px" mb="80px">
      <Text mb="8px" fontSize="24px" fontWeight=" bold" lineHeight="1.33" letterSpacing="-0.5px">
        Don’t only read, be read about.
      </Text>
      <Box w="342px" h="4px" bgColor="#B83280" mb="32px" />
      <Flex align="center" justify="space-between">
        {CardData.map((item, index) => (
          <Card key={index} data={item} index={index} />
        ))}
      </Flex>
    </Container>
  );
};

export default ReadAbout;
