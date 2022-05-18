import { Container, Box, Flex, Text, Heading, Button, Img } from "@chakra-ui/react";

const OutliersCard = () => {
  return (
    <Flex
      flexDirection="column"
      justify="space-between"
      width="212px"
      height="176px"
      padding="18px 16px 18px 18px"
      border="solid 1px #dadada"
      backgroundColor=" #fff"
      _hover={{
        height: "224px",
      }}
    >
      <Heading
        fontSize="16px"
        fontWeight=" bold"
        lineHeight="1.5"
        letterSpacing="-0.2px"
        color="#000"
      >
        TileDB
      </Heading>

      <Flex justify="space-between" align="center">
        <Heading
          fontSize="16px"
          fontWeight=" bold"
          lineHeight="1.5"
          letterSpacing="-0.2px"
          color="#000"
        >
          33:22
        </Heading>
        <Button
          rightIcon={
            <Img
              src="/play.png"
              sx={{
                ".main-box:hover &": {
                  w: "28px",
                },
              }}
              m="0"
              w="15px"
              alt="logo"
            />
          }
          p="0"
          w="32px"
          h="38px"
          bgColor="#ddd9d9"
          borderRadius="50%"
        ></Button>
      </Flex>
    </Flex>
  );
};

export default OutliersCard;
