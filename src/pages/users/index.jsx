import { Box } from "@chakra-ui/layout";
import Certificate from "components/Certificate";
import React from "react";

const Users = () => {
  return (
    <Box>
      {new Array(1).fill("").map((_, idx) => (
        <Certificate key={idx} />
      ))}
    </Box>
  );
};

export default Users;
