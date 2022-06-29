import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";

type MenuButtonProps = {};

const MenuButton = (props: MenuButtonProps) => {
  const color = useColorModeValue("teal", "teal.200");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <IconButton
        variant="link"
        icon={<Icon icon="heroicons-solid:menu" />}
        aria-label="Menu Button"
        color={color}
        fontSize="3xl"
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent rounded="xl" my="20" ml="5">
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Heading size="sm" mb={2}>
              Settings
            </Heading>
            <Flex flexDir="column">
              <Flex justifyContent="space-between">
                <HStack align="center">
                  <Text>Color mode:</Text>
                  <Text fontWeight="bold" textTransform="capitalize">
                    {colorMode}
                  </Text>
                </HStack>
                <Switch
                  colorScheme="teal"
                  size="md"
                  onChange={toggleColorMode}
                  isChecked={colorMode === "dark" ? true : false}
                />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MenuButton;
