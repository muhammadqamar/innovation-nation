import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Lorem,
  Image,
} from "@chakra-ui/react";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <Image
          src="/menu.svg"
          alt="footer_logo"
          width={33}
          height={24}
          bg="transparent"
          border="none !important"
        />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            <Lorem count={2} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BasicUsage;
