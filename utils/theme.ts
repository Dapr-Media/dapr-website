import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { GlobalStyleProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("white", "#1A1A1A")(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Text: {
      baseStyle: {
        textAlign: "center",
        lineHeight: "24px",
      },
    },
  },
  semanticTokens: {
    colors: {
      daprRed: "#FF3333",
      daprBlack: "#1A1A1A",
      bg: {
        default: "#fff",
        _dark: "#1A1A1A",
      },
      text: {
        default: "#000",
        _dark: "#fff",
      },
      svg: {
        default: "#000",
        _dark: "#fff",
      },
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
