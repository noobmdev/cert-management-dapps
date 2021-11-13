import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Select } from "@chakra-ui/select";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { GENDER, GRADUATE_GRADE } from "configs";
import React, { useState } from "react";

const certTypes = [
  {
    name: "Certificate Type 1",
  },
  {
    name: "Certificate Type 2",
  },
  {
    name: "Certificate Type 3",
  },
];

const certs = [
  {
    name: "Certificate Name 1",
    title: "Certificate Title 1",
    type: "Certificate Type 1",
    total: 100,
    minted: 15,
  },
  {
    name: "Certificate Name 2",
    title: "Certificate Title 2",
    type: "Certificate Type 2",
    total: 150,
    minted: 60,
  },
  ,
  {
    name: "Certificate Name 3",
    title: "Certificate Title 3",
    type: "Certificate Type 1",
    total: 100,
    minted: 15,
  },
];

const certMenu = {
  certificateType: "CERTIFICATE TYPES",
  certificates: "CERTIFICATES",
};

const Cert = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenMint,
    onOpen: onOpenMint,
    onClose: onCloseMint,
  } = useDisclosure();

  const [selectedItem, setSelectedItem] = useState(certMenu.certificates);

  const renderBody = () => {
    switch (selectedItem) {
      case certMenu.certificateType:
        return (
          <Table variant="simple" size="lg">
            <Thead>
              <Tr>
                <Th color="white">STT</Th>
                <Th color="white">Name</Th>
                <Th color="white" isNumeric>
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {certTypes.map((censor, idx) => (
                <Tr>
                  <Td>{idx + 1}</Td>
                  <Td>{censor.name}</Td>
                  <Td isNumeric>
                    <Button colorScheme="red">Disable</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        );

      case certMenu.certificates:
        return (
          <Table variant="simple" size="lg">
            <Thead>
              <Tr>
                <Th color="white">STT</Th>
                <Th color="white">Name</Th>
                <Th color="white">Title</Th>
                <Th color="white">Certificate Type</Th>
                <Th color="white">Total</Th>
                <Th color="white">Minted</Th>
                <Th color="white" isNumeric>
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {certs.map((censor, idx) => (
                <Tr>
                  <Td>{idx + 1}</Td>
                  <Td>{censor.name}</Td>
                  <Td>{censor.title}</Td>
                  <Td>{censor.type}</Td>
                  <Td>{censor.total}</Td>
                  <Td>{censor.minted}</Td>
                  <Td isNumeric>
                    <Button colorScheme="telegram">View</Button>
                    <Button colorScheme="teal" mx="2" onClick={onOpenMint}>
                      Mint
                    </Button>
                    <Button colorScheme="red">Disable</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        );

      default:
        return null;
    }
  };

  const renderModalBody = () => {
    switch (selectedItem) {
      case certMenu.certificateType:
        return (
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" placeholder="Name" />
          </FormControl>
        );

      case certMenu.certificates:
        return (
          <>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" placeholder="Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input name="title" placeholder="Title" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mode of study</FormLabel>
              <Select>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote Full-time</option>
                <option>Remote Part-time</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Certificate Type</FormLabel>
              <Select value={selectedItem}>
                {new Array(3).fill("").map((k, idx) => (
                  <option key={idx} value={k}>
                    Certificate Type {idx + 1}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Total certificate can minted</FormLabel>
              <NumberInput defaultValue={1} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new certificate type</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4">{renderModalBody()}</VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal mint cert */}
      <Modal isOpen={isOpenMint} onClose={onCloseMint}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mint Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4" align="stretch">
              <Box>Mint Certificate 1 for</Box>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input name="name" placeholder="Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Gender</FormLabel>

                <Select defaultValue="">
                  <option value="" hidden>
                    Choose a gender
                  </option>
                  {Object.keys(GENDER).map((k, idx) => (
                    <option key={idx} value={GRADUATE_GRADE[k]}>
                      {k}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Date of birth</FormLabel>
                <input
                  type="date"
                  style={{
                    border: "1px solid",
                    borderColor: "rgba(0,0,0,0.1)",
                    padding: "4px",
                    borderRadius: "5px",
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Graduate grade</FormLabel>
                <Select defaultValue="">
                  <option value="" hidden>
                    Choose a graduate grade
                  </option>
                  {Object.keys(GRADUATE_GRADE).map((k, idx) => (
                    <option key={idx} value={GRADUATE_GRADE[k].value}>
                      {k}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <HStack>
        <Box>
          <Select
            size="lg"
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            {Object.keys(certMenu).map((k, idx) => (
              <option key={idx} value={certMenu[k]} style={{ color: "black" }}>
                {certMenu[k]}
              </option>
            ))}
          </Select>
        </Box>
        <Button colorScheme="teal" onClick={onOpen}>
          ADD
        </Button>
      </HStack>

      {renderBody()}
    </Box>
  );
};

export default Cert;
