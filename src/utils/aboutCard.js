import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

const AboutCard = ({ data, index }) => {
  return (
    <Flex
      flexDirection={index === 0 ? "row" : "column"}
      w={index === 0 ? "504px " : "334px"}
      h="430px"
      p={index === 0 ? "8px" : "8px 8px 24px"}
      border="solid 1px #dadada"
      boxShadow="0 22px 24px 0 rgba(0, 0, 0, 0.07)"
      className="main-box"
      _hover={{
        transform: "scaleY(1.1)",
      }}
    >
      <Box
        w={index === 0 ? "240px" : "100%"}
        h={index === 0 ? "100%" : "200px"}
        flexShrink={index === 0 && "0"}
        bgImage={`url(${data.image})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      />

      <Flex
        flexDirection="column"
        justify="space-between"
        align="flex-end"
        h={index === 0 ? "100%" : "201px"}
        p={index === 0 ? "7px 14px 19px 18px" : "16px 10px 0"}
      >
        <Box>
          <Text
            sx={{
              ".main-box:hover &": {
                fontSize: "24px",
                lineHeight: "1.17",
                letterSpacing: "-0.3px",
              },
            }}
            mb="7px"
            fontSize={index === 0 ? "24px" : "20px"}
            lineHeight="1.3"
            fontWeight="bold"
            letterSpacing="-0.25px"
          >
            {data.title}
          </Text>
          <Text fontSize="14px" lineHeight="1.71" fontWeight="normal" letterSpacing="-0.18px">
            {data.para}
          </Text>
        </Box>
        <Button
          sx={{
            ".main-box:hover &": {
              fontWeight: "800",
              lineHeight: "1.5",
              letterSpacing: "1px",
            },
          }}
          fontSize="16px"
          lineHeight="1.5"
          fontWeight="500"
          letterSpacing="1px"
          color="#c3399e"
          variant="link"
          rightIcon={
            <Img
              src="/arrow-pink.svg"
              sx={{
                ".main-box:hover &": {
                  w: "28px",
                },
              }}
              w="20px"
              alt="logo"
            />
          }
        >
          READ MORE
        </Button>
      </Flex>
    </Flex>
  );
};

export default AboutCard;
