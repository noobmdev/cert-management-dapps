import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import { ROLES } from "configs";
import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  return (
    <VStack pos="fixed" top="50%" left="50%" transform="translate(-50%,-50%)">
      <Select
        size="lg"
        textTransform="uppercase"
        fontSize="2xl"
        fontWeight="bold"
        _focus={{
          borderColor: "white",
        }}
        onChange={(e) => {
          const roleKey = Object.keys(ROLES).find(
            (k) => ROLES[k].value === +e.target.value
          );
          if (!roleKey) return alert("Invalid Role");
          history.push(`/${ROLES[roleKey].name}`);
        }}
        defaultValue=""
      >
        <option
          value=""
          disabled
          hidden
          style={{
            color: "black",
            textTransform: "uppercase",
          }}
        >
          choose your role
        </option>
        {Object.keys(ROLES).map((k, idx) => (
          <option
            style={{ color: "black", textTransform: "uppercase" }}
            value={ROLES[k].value}
            key={idx}
          >
            {ROLES[k].name}
          </option>
        ))}
      </Select>
    </VStack>
  );
};

export default Home;
