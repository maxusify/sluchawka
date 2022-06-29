import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(config);

export default theme;
