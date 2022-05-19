import { Flex, Heading, Button, Img } from "@chakra-ui/react";

const OutliersCard = ({ item, index }) => {
  return (
    <Flex
      flexDirection={{ base: `${index === 3 ? "column " : "row"}`, md: "column" }}
      justify="space-between"
      w={{ base: "280px", sm: "366px", md: "212px" }}
      minH={{ base: "70px", md: "176px" }}
      padding="18px 16px 18px 18px"
      border="solid 1px #dadada"
      backgroundColor={index === 3 ? "#000" : " #fff"}
      _hover={{
        height: "224px",
      }}
    >
      <Heading
        fontSize={index === 3 ? "24px" : "16px"}
        fontWeight="bold"
        lineHeight={index === 3 ? "1.17 " : "1.5"}
        letterSpacing={index === 3 ? "normal" : "-0.2px"}
        color={index === 3 ? "#fff" : "#000"}
        mb={{ base: `${index === 3 && "52px"}`, md: "0" }}
        w={index === 3 && "142px"}
      >
        {index === 3 ? item.episTitle : item.title}
      </Heading>

      <Flex justify="space-between" align="center">
        <Heading
          fontSize="16px"
          fontWeight=" bold"
          lineHeight="1.5"
          letterSpacing="-0.2px"
          color={index === 3 ? "#fff" : "#000"}
          mr={{ base: "26px", md: "0" }}
        >
          {index === 3 ? item.epis : item.time}
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
