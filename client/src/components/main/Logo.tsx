import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type LogoProps = {
  larger?: string;
};

const Logo: React.FC<LogoProps> = ({ larger }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text
        fontFamily="Pacifico"
        fontSize={larger ? "2xl" : "xl"}
        color="#E23E57"
        h="100%"
      >
        Słuchawka
      </Text>
    </Flex>
  );
};

export default Logo;
