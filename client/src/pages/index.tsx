import { Flex } from "@chakra-ui/react";
import { NavBar } from "../components";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  return (
    <Flex bg="gray.100" w="100%" h="100vh" flexDir="column">
      <NavBar />
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
