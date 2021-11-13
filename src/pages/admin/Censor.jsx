import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";

const censors = [
  {
    name: "Censor 1",
    email: "censor@email.com",
    address: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
  },
  {
    name: "Censor 1",
    email: "censor@email.com",
    address: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
  },
  {
    name: "Censor 1",
    email: "censor@email.com",
    address: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
  },
  {
    name: "Censor 1",
    email: "censor@email.com",
    address: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
  },
];

const Censor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new censor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input name="name" placeholder="Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input name="email" placeholder="Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input name="address" placeholder="Address" />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button colorScheme="teal" onClick={onOpen}>
        ADD
      </Button>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th color="white">STT</Th>
            <Th color="white">Name</Th>
            <Th color="white">Email</Th>
            <Th color="white">Address</Th>
            <Th color="white" isNumeric>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {censors.map((censor, idx) => (
            <Tr>
              <Td>{idx + 1}</Td>
              <Td>{censor.name}</Td>
              <Td>{censor.email}</Td>
              <Td>{censor.address}</Td>
              <Td isNumeric>
                <Button colorScheme="teal" mr="2" onClick={onOpen}>
                  Edit
                </Button>
                <Button colorScheme="red">Disable</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Censor;
