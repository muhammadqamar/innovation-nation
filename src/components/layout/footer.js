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
          padding="87px 24px 42px"
        >
          <Flex
            justifyContent="space-between"
            marginBottom={{ base: "79px", lg: "72px" }}
            flexDirection={{ base: "column", lg: "row" }}
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
              <Flex flexDirection={{ base: "column", lg: "row" }}>
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
                  margin={{ base: "0 0 20px", lg: "auto" }}
                />
                <Button
                  minWidth="156px"
                  bg="#e1478be8"
                  color="#fff"
                  justifyContent="space-around"
                  margin={{ base: "0", lg: "0 0 0 10px" }}
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
                margin={{ base: "30px 0 79px", lg: "15px 0 0" }}
              >
                I understand that by submitting this request I agree to the{" "}
                <Link textDecoration="underline">terms and conditions</Link> of
                Innovation Nation
              </Checkbox>
            </FormControl>
          </Flex>
          <Divider
            maxW={{ base: "514px", lg: "1008px" }}
            borderColor="#8d8d8d"
          />
          <Flex
            width="100%"
            margin={{ base: "43px 0 60px", lg: "43px 0" }}
            alignItems={{ base: "center", lg: "baseline" }}
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Flex alignItems="center">
              <Image
                src="/footer_logo.svg"
                alt="footer_logo"
                width={124}
                height={18}
                object-fit="contain"
                margin={{ base: "10px", lg: "7px 31px 7px 0" }}
              />
              <Image
                src="/footer_logo.svg"
                alt="footer_logo"
                width={124}
                height={18}
                margin={{ base: "10px", lg: "0" }}
              />
            </Flex>
            <Heading
              fontSize="16px"
              textTransform="uppercase"
              fontWeight="normal"
              lineHeight="1.5"
              letterSpacing="2px"
              margin={{ base: "50px 0 29px", lg: "" }}
            >
              Under the auspices of
            </Heading>
            <Flex alignItems="center">
              <Image
                src="/footer_logo.svg"
                alt="footer_logo"
                width={124}
                height={18}
                margin={{ base: "10px", lg: "0 10" }}
              />
              <Image
                src="/footer_logo.svg"
                alt="footer_logo"
                width={124}
                height={18}
                margin={{ base: "10px", lg: "0" }}
              />
            </Flex>
          </Flex>
          <Text
            fontSize="16px"
            width="100%"
            color="#8d8d8d"
            display="flex"
            justifyContent={{ base: "center", lg: "" }}
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
