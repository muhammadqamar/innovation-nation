import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerBody,
  Img,
  Flex,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button w="33px" p="0" ref={btnRef} onClick={onOpen} bgColor="transparent">
        <Image src="/menu-mob.svg" alt="footer_logo" boxSize="33px" objectFit="cover" />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex flexDirection="column" mt="100px">
              <Link href="/home">
                <a
                  style={{
                    fontSize: "25px",
                    fontWeight: "normal",
                    lineHeight: "1.5",
                    fontFamily: "BurfordRusticBookBlack",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  Become a citizen
                </a>
              </Link>
              <Link href="/home">
                <a
                  style={{
                    fontSize: "25px",
                    fontWeight: "normal",
                    lineHeight: "1.5",
                    fontFamily: "BurfordRusticBookBlack",
                    color: "#000",
                    textTransform: "uppercase",
                  }}
                >
                  Contact
                </a>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default BasicUsage;
