import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

const ActivateCard = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-end"
      justify="space-between"
      width={{ base: "100%", md: "290px" }}
      height="323px"
      padding="23px 23px 17px 19px"
      box-shadow="0 22px 24px 0 rgba(0, 0, 0, 0.07)"
      border=" solid 1px #dadada"
      backgroundColor="#fff"
    >
      <Box>
        <Heading
          fontSize="40px"
          fontWeight=" normal"
          lineHeight="0.65"
          letterSpacing="-4.55px"
          color="#000"
          mb="17px"
          textTransform="uppercase"
          fontFamily="BurfordRusticBookBlack"
        >
          ATHENS INNOVATION SUMMIT
        </Heading>
        <Text
          fontSize="16px"
          fontWeight="normal"
          lineHeight="1.5"
          letterSpacing="normal"
          color="#000"
          mb="22px"
        >
          A tailored registry for talent eager to work for a fast-growing, Greek tech company. Here
          you can connect with top employers from our portfolio as they scale from startups to tech
          giants.
        </Text>
      </Box>
      <Button
        display={{ base: "none", md: "block" }}
        fontSize="16px"
        lineHeight="1.5"
        fontWeight="500"
        letterSpacing="1px"
        color="#c3399e"
        variant="link"
        rightIcon={<Img src="/arrow-pink.svg" w="20px" alt="logo" />}
      >
        LEARN MORE
      </Button>
    </Flex>
  );
};

export default ActivateCard;
