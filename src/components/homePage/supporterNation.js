import React from "react";
import { Box, Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

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
    <Box
      maxW="1440px"
      p={{ base: "100px 24px 26px", md: "94px 60px 71px", xl: "94px 217px 71px 110px" }}
      m="auto"
    >
      <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
        <Box mb={{ base: "36px", xl: "0" }}>
          <Text
            maxWidth="362px"
            fontSize="44px"
            textTransform="uppercase"
            fontWeight="normal"
            lineHeight="0.82"
            letterSpacing="-4.89px"
            marginTop="-36px"
            fontFamily="BurfordRusticBookBlack"
          >
            Supporters of the
          </Text>
          <Heading
            textTransform="uppercase"
            fontWeight="normal"
            fontSize="114px"
            lineHeight="0.75"
            letterSpacing="-12.67px"
            fontFamily="BurfordRusticBookBlack"
          >
            Nation
          </Heading>
        </Box>
        <Wrap w="708px">
          {logos.map((item, index) => (
            <WrapItem key={index}>
              <Image src={item.img} alt="btn_image" width={171} height={92} />
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </Box>
  );
};

export default SupporterNation;
