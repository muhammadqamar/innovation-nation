import React from "react";
import Link from "next/link";
import { Box, Flex, ReachLink, Container, Img } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box w="100%" pos="absolute">
      <Container
        maxW="1440px"
        p="47px  110px 0"
        m="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Img src="nation-logo.svg" alt="logo" />

        <Flex>
          <Link href="/home">
            <a
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.5",
                color: "#fff",
                textTransform: "uppercase",
                marginRight: "48px",
              }}
            >
              Become a citizen
            </a>
          </Link>
          <Link href="/home">
            <a
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.5",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Contact{" "}
            </a>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
