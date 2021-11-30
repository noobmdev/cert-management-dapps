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
import React, { useEffect, useState } from "react";
import { isAddress } from "@ethersproject/address";
import { addCensor, getCensors } from "utils/getCertContract";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";

const Censor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account, library } = useActiveWeb3React();

  const [refresh, setRefresh] = useState(true);
  const [censors, setCensor] = useState([]);
  const [addr, setAddr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (library) getCensors(library).then(setCensor).catch(console.error);
  }, [library, refresh]);

  const handleAddCensor = async () => {
    try {
      if (!account || !library) return;
      if (!addr || !name || !email) return alert("Fill all required fields");

      if (!isAddress(addr)) return alert("Enter valid address");
      setSubmitting(true);
      await addCensor(library, account, [addr, name, email]);
      setRefresh((pre) => !pre);
      setAddr("");
      setName("");
      setEmail("");
      setSubmitting(false);
      onClose();
    } catch (error) {
      setSubmitting(false);
      console.error(error);
    }
  };

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
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="Name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  value={addr}
                  onChange={(e) => setAddr(e.target.value)}
                  name="address"
                  placeholder="Address"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={handleAddCensor}
              isLoading={submitting}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button colorScheme="teal" onClick={onOpen}>
        ADD
      </Button>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>STT</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th isNumeric>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {censors.map((censor, idx) => (
            <Tr key={idx}>
              <Td>{idx + 1}</Td>
              <Td>{censor.name}</Td>
              <Td>{censor.email}</Td>
              <Td>{censor.addr}</Td>
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
