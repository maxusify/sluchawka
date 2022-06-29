import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  IconButton,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";

import { useLogoutMutation, useMeQuery } from "../../lib/generated/graphql";
import { isServer } from "../../utils/isServer";
import Logo from "./Logo";
import MenuButton from "./MainMenu";

type NavBarUserSectionProps = {};

const NavBarUserSection: React.FC<NavBarUserSectionProps> = (props) => {
  const router = useRouter();

  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  let body = null;

  if (typeof window !== "undefined") {
    if (fetching) {
      body = null;
    } else if (!data?.me) {
      body = (
        <ButtonGroup size="sm" colorScheme="teal">
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
        <ButtonGroup isAttached size="sm" colorScheme="teal">
          <Button rounded="xl">{data.me.email}</Button>
          <IconButton
            rounded="xl"
            icon={<Icon icon="ant-design:logout-outlined" />}
            aria-label="Log out button"
            onClick={() => logout()}
            isLoading={logoutFetching}
          />
        </ButtonGroup>
      );
    }
  }
  return <Box fontFamily="Jost">{body}</Box>;
};

type NavBarContent = {};

const NavBarContent: React.FC<NavBarContent> = (props) => {
  const bgColor = useColorModeValue("gray.100", "#222A39");
  const shadow = useColorModeValue("lg", "dark-lg");
  return (
    <Flex
      w="100%"
      bgColor={bgColor}
      px="5"
      py="3"
      rounded="3xl"
      justifyContent="center"
      alignItems="center"
      shadow={shadow}
    >
      <SimpleGrid columns={3} w="100%">
        <GridItem>
          <Flex h="100%" justifyContent="flex-start" alignItems="center">
            <MenuButton />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex h="100%" justifyContent="center" alignItems="center">
            <Logo />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex h="100%" justifyContent="flex-end" alignItems="center">
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
export { NavBarContainer, NavBarContent };
