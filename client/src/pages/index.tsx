import { Flex, useColorModeValue } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";

import { NavBar } from "../components";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  return (
    <Flex bgColor={bgColor} w="100%" h="100vh" flexDir="column">
      <NavBar />
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
