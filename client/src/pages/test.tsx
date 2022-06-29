import { Flex, useColorModeValue } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { NavBar } from "../components";
import { createUrqlClient } from "../utils/createUrqlClient";

type TestProps = {};

const Test = (props: TestProps) => {
  const bgColor = useColorModeValue("gray.200", "gray.900");

  return (
    <Flex h="100vh" w="100vw" bgColor={bgColor}>
      <NavBar />
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Test);
