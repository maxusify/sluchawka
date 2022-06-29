import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import logo from "../../public/static/images/logo.svg";

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Link href="/">
        <a>
          <Image src={logo.src} h="10" />
        </a>
      </Link>
    </Flex>
  );
};

export default Logo;
