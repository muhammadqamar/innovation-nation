import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const logos = [
  {
    img: "/supporter_logo.svg",
  },
  {
    img: "/supporter_logoOne.svg",
  },
  {
    img: "/supporter_logoTwo.svg",
  },
  {
    img: "/supporter_logoThree.svg",
  },
  {
    img: "/supporter_logoFour.svg",
  },
  {
    img: "/supporter_logoFive.svg",
  },
  {
    img: "/supporter_logoSix.svg",
  },
  {
    img: "/supporter_logoSeven.svg",
  },
];
const SupporterNation = () => {
  return (
    <Box maxW="1440px">
      <Flex alignItems="center" justifyContent="space-evenly">
        <Text
          maxWidth="362px"
          fontSize="20px"
          textTransform="uppercase"
          fontWeight="900"
          marginTop="-36px"
        >
          Supporters of the
          <Heading textTransform="uppercase" fontWeight="900" fontSize="44px">
            Nation
          </Heading>
        </Text>
        <Flex maxW="684px" flexWrap="wrap">
          {logos.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt="btn_image"
              width={171}
              height={92}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SupporterNation;
