import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

type MenuButtonProps = {};

const MenuButton = (props: MenuButtonProps) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        variant="link"
        icon={<Icon icon="heroicons-solid:menu" />}
        aria-label="Menu Button"
        color="#E23E57"
        fontSize="3xl"
      />
    </Flex>
  );
};

export default MenuButton;
