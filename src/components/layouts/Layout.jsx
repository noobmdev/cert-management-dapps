import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { formatEther } from "@ethersproject/units";
import { connectors } from "connectors";
import { useWallet } from "connectors/hooks";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "styles/Layout.css";

export const Layout = ({ children }) => {
  const { account, isConnected, library } = useActiveWeb3React();
  const { connect } = useWallet();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ETHBalacne, setETHBalance] = useState();

  useEffect(() => {
    const getBalance = async () => {
      library
        .getBalance(account, "latest")
        .then((balance) =>
          setETHBalance(parseFloat(formatEther(balance.toString())).toFixed(4))
        );
    };

    isConnected && getBalance();
  }, [isConnected]);

  return (
    <Box minH="100vh" color="white">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Modal size="sm" isOpen={isOpen && !isConnected} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap="12">
              {connectors.map((c, idx) => (
                <VStack
                  key={idx}
                  cursor="pointer"
                  p="4"
                  borderRadius="md"
                  _hover={{
                    bg: "gray.300",
                  }}
                  onClick={() => connect(c.connector)}
                >
                  <Box h="12">{c.icon}</Box>
                  <Text as="b" textAlign="center">
                    {c.name}
                  </Text>
                </VStack>
              ))}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <HStack
        h="14"
        px="8"
        py="4"
        align="center"
        flex="1"
        justify="flex-end"
        spacing="4"
      >
        {isConnected ? (
          <HStack>
            {ETHBalacne && <Button colorScheme="teal">{ETHBalacne} BNB</Button>}
            <Link to="/candidate">
              <Button colorScheme="teal">{account}</Button>
            </Link>
          </HStack>
        ) : (
          <Button colorScheme="teal" onClick={onOpen}>
            Connect wallet
          </Button>
        )}
      </HStack>
      <Box minH="calc(100vh - 7em)" px="8" py="4" className="main-contanier">
        {children}
      </Box>

      <Box textAlign="center" p="4" style={{ color: "white" }}>
        © {new Date().getFullYear()} Copyright
      </Box>
    </Box>
  );
};
