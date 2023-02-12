// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Text: {
    baseStyle: {
      marginBottom: "0.5em",
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config, components });

export default theme;
