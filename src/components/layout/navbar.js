import React from "react";
import { Box, Flex, Text, ReachLink, Link, Container } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Container maxW="1440px">
        <Flex
          maxW={{ base: "100%", lg: "337px" }}
          fontWeight="700"
          textTransform="uppercase"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="22px">
              <span style={{ color: "#e1478be8", fontWeight: "800" }}>#</span>
              Innovation_nation
            </Text>
            <Link as={ReachLink} to="/home">
              Become a citizen
            </Link>
            <Link as={ReachLink} to="/home">
              Contact
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
