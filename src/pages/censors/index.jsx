import { Button } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useState } from "react";

const certTypes = {
  pending: "pending",
  reviewed: "reviewed",
};

const certs = [
  {
    cert: {
      name: "Certificate Name 1",
      title: "Certificate Title 1",
      type: "Certificate Type 1",
    },
    owner: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
    ownerInfo: {
      name: "Nguyen Van A",
      birthDay: "2021-01-01",
      graduateGrade: 4,
    },
    regNo: 15,
    mintedAt: 1636810322,
    status: 0,
  },
  {
    cert: {
      name: "Certificate Name 1",
      title: "Certificate Title 1",
      type: "Certificate Type 1",
    },
    owner: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
    ownerInfo: {
      name: "Nguyen Van A",
      birthDay: "2021-01-01",
      graduateGrade: 4,
    },
    regNo: 15,
    mintedAt: 1636810322,
    status: 0,
  },
  {
    cert: {
      name: "Certificate Name 1",
      title: "Certificate Title 1",
      type: "Certificate Type 1",
    },
    owner: "0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e",
    ownerInfo: {
      name: "Nguyen Van A",
      birthDay: "2021-01-01",
      graduateGrade: 4,
    },
    regNo: 15,
    mintedAt: 1636810322,
    status: 0,
  },
];

const renderKeyCertInfoOfOwner = (key) => {
  switch (key) {
    case "name":
      return "Name";
    case "title":
      return "Name";
    case "type":
      return "Type";
    case "birthDay":
      return "Birth day";
    case "graduateGrade":
      return "Graduate Grade";
    default:
      return "";
  }
};

const Censors = () => {
  const [selectedCertType, setSelectedCertType] = useState(certTypes.pending);

  return (
    <Box>
      <HStack>
        <Box>Certificate type</Box>
        <Box>
          <Select
            textTransform="uppercase"
            value={selectedCertType}
            onChange={(e) => setSelectedCertType(e.target.value)}
          >
            {Object.keys(certTypes).map((k, idx) => (
              <option
                key={idx}
                value={certTypes[k]}
                style={{
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                {certTypes[k]}
              </option>
            ))}
          </Select>
        </Box>
      </HStack>

      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th color="white">STT</Th>
            <Th color="white">Owner's address</Th>
            <Th color="white">Owner's info</Th>
            <Th color="white">Certificate's info</Th>
            <Th color="white" isNumeric>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {certs.map((censor, idx) => (
            <Tr>
              <Td>{idx + 1}</Td>
              <Td>{censor.owner}</Td>
              <Td>
                {Object.keys(censor.ownerInfo).map((k, idx) => (
                  <Box key={idx}>
                    {renderKeyCertInfoOfOwner(k)}: {censor.ownerInfo[k]}
                  </Box>
                ))}
              </Td>
              <Td>
                {Object.keys(censor.cert).map((k, idx) => (
                  <Box key={idx}>
                    {renderKeyCertInfoOfOwner(k)}: {censor.cert[k]}
                  </Box>
                ))}
              </Td>
              <Td isNumeric>
                <Button colorScheme="teal" mr="2">
                  Accept
                </Button>
                <Button colorScheme="red">Decline</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Censors;
