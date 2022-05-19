import { Box, Button, Flex, Heading, Image, Img, Text } from "@chakra-ui/react";

const StartUp = () => {
  return (
    <Box
      maxW="1440px"
      minH="564px"
      pos="relative"
      m="auto"
      overflow="hidden"
      p="80px 0 0 108px"
      display="flex"
    >
      <Box maxW="800px">
        <Heading mb="16px" fontWeight="bold" fontSize="42px">
          The Greek Tech Industry is a community with common goals, aspirations and state of mind
        </Heading>

        <Text mb="16px" fontSize="18px" fontWeight="400">
          Why join? The real question is why now.{" "}
        </Text>
        <Text mb="16px" fontSize="18px" fontWeight="400">
          Athens has evolved into a centralized tech hub, made by a community of successful
          high-impact entrepreneurs. We have found the sweet spot of collaboration between the
          public and private sectors, with one common goal - fueling leaders and founders to
          accelerate Greece’s tech scene
        </Text>
        <Button
          rightIcon={<Img src="/arrow-right.svg" w="16px" alt="logo" />}
          bgColor="#ECC94B"
          color="#000"
          borderRadius="0"
          fontSize="14px"
        >
          SEE MORE ETC
        </Button>
      </Box>

      <Box pos="absolute" right="-20px">
        <Image
          marginLeft="195px"
          borderRadius="full"
          boxSize="150px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Flex align="flex-end">
          <Image
            margin="0 115px 10px 0"
            borderRadius="full"
            boxSize="175px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Image
            borderRadius="full"
            boxSize="250px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default StartUp;
