import React from "react";
import { useLogoutMutation, useMeQuery } from "../../lib/generated/graphql";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

type NavBarUserSectionProps = {};

const NavBarUserSection: React.FC<NavBarUserSectionProps> = (props) => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  const [, logout] = useLogoutMutation();
  let body = null;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <ButtonGroup size="sm" colorScheme="red">
        <Button
          variant="solid"
          rounded="xl"
          onClick={() => router.push("/register")}
        >
          Sign up
        </Button>
        <Button
          variant="outline"
          rounded="xl"
          onClick={() => router.push("/login")}
        >
          Log in
        </Button>
      </ButtonGroup>
    );
  } else {
    body = (
      <ButtonGroup isAttached size="sm" colorScheme="red">
        <Button rounded="xl">{data.me.email}</Button>
        <IconButton
          rounded="xl"
          icon={<Icon icon="bxs:down-arrow" />}
          aria-label="Menu dropdown"
        />
      </ButtonGroup>
    );
  }

  return <Box fontFamily="Jost">{body}</Box>;
};

type NavBarContent = {};

const NavBarContent: React.FC<NavBarContent> = (props) => {
  return (
    <Flex
      w="100%"
      bgColor="white"
      px="5"
      py="3"
      rounded="3xl"
      justifyContent="center"
      alignItems="center"
      shadow="lg"
    >
      <SimpleGrid columns={3} w="100%">
        <GridItem>
          <Flex justifyContent="flex-start" alignItems="center">
            <MenuButton />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex h="100%" justifyContent="center" alignItems="center">
            <Logo />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex justifyContent="flex-end" alignItems="center">
            <NavBarUserSection />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

type NavBarContainerProps = {
  children: React.ReactNode;
};

const NavBarContainer: React.FC<NavBarContainerProps> = (props) => {
  return (
    <Flex pos="fixed" w="100%" py={"20px"} px={"50px"}>
      {props.children}
    </Flex>
  );
};

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <NavBarContainer>
      <NavBarContent />
    </NavBarContainer>
  );
};

export default NavBar;
