import React from "react";
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Image,
  Button,
  Checkbox,
  Divider,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box width="100%" bgColor="#000" minHeight="485px" margin="86px 0 0">
        <Container
          maxW="1008px"
          bg="transparent"
          color="#fff"
          centerContent
          padding="87px 0 42px"
        >
          <Flex
            justifyContent="space-between"
            marginBottom="72px"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <Box
              minW={{ base: "100%", lg: "255px" }}
              fontWeight="900"
              textTransform="uppercase"
            >
              <Text fontSize="22px">
                <span style={{ color: "#c3399e", fontWeight: "800" }}>#</span>
                Innovation_nation
              </Text>
              <Heading
                minWidth="255px"
                minHeight="72px !important"
                fontSize={{ base: "30px", lg: "52px" }}
                lineHeight="36px"
                letterSpacing="-5.78px"
              >
                Sign up to our{" "}
                <span style={{ color: "#faff00" }}>Newsletter</span>
              </Heading>
            </Box>
            <FormControl minWidth={{ base: "100%", lg: "530px !important" }}>
              <FormLabel
                htmlFor="email"
                textTransform="uppercase"
                fontSize="16px"
                lineHeight="1.5"
                fontWeight="normal"
              >
                Your Email
              </FormLabel>
              <Flex>
                <Input
                  id="email"
                  type="email"
                  placeholder="Type here..."
                  minWidth={{ base: "100%", lg: "405px" }}
                  minH="48px"
                  border="2px solid #474747ba !important"
                  borderRadius="none"
                  color="lightGrey"
                  padding="0 12px !important"
                />
                <Button
                  minWidth="156px"
                  bg="#e1478be8"
                  color="#fff"
                  justifyContent="space-around"
                  margin="0 0 0 10px"
                  borderRadius="none"
                  minHeight="48px"
                  textTransform="uppercase"
                  fontSize="18px"
                  rightIcon={
                    <Image
                      src="/right_img.svg"
                      alt="btn_image"
                      width={27}
                      height={14}
                    />
                  }
                >
                  Sign up
                </Button>
              </Flex>
              <Checkbox
                colorScheme="pink"
                defaultChecked
                alignItems="baseline"
                maxW="482px"
                font-size="16px"
                lineHeight="1.5"
                marginTop="15px"
              >
                I understand that by submitting this request I agree to the{" "}
                <Link textDecoration="underline">terms and conditions</Link> of
                Innovation Nation
              </Checkbox>
            </FormControl>
          </Flex>
          <Divider maxW="1008px" borderColor="#8d8d8d" />
          <Flex
            width="100%"
            margin="43px 0"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Image
              src="/footer_logo.svg"
              alt="footer_logo"
              width={124}
              height={18}
              object-fit="contain"
              margin={{ base: "10px", lg: "7px 31px 7px 0" }}
            />
            <Image
              src="/footer_logos.jpg"
              alt="footer_logo"
              width={70}
              height={50}
              margin={{ base: "10px", lg: "0" }}
            />
            <Heading
              fontSize="16px"
              textTransform="uppercase"
              fontWeight="normal"
              lineHeight="1.5"
              letterSpacing="2px"
            >
              Under the auspices of
            </Heading>
            <Image
              src="/footer_logos.jpg"
              alt="footer_logo"
              width={70}
              height={50}
              margin={{ base: "10px", lg: "0" }}
            />
            <Image
              src="/footer_logos.jpg"
              alt="footer_logo"
              width={70}
              height={50}
              margin={{ base: "10px", lg: "0" }}
            />
          </Flex>
          <Text
            fontSize="16px"
            width="100%"
            color="#8d8d8d"
            display="flex"
            fontWeight="500"
            lineHeight="1.38"
            alignItems="baseline"
          >
            Copyright are weird.2021 Trademark
            <Image
              src="/trademark_logo.svg"
              alt="footer_logo"
              width={5}
              height={4}
            />
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
