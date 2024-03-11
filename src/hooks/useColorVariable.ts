import { theme, useColorModeValue } from "@chakra-ui/react";

type COLOR_VARIABLES =
  | "DEFAULT_TEXT"
  | "SUBTLE_TEXT"
  | "DEFAULT_BACKGROUND"
  | "CARD_BACKGROUND"
  | "SUBTLE_BACKGROUND"
  | "PLACEHOLDER"
  | "COLOR_MODE_SWITCH"
  | "SCROLLBAR_THEME";

const themeColor: {
  light?: string;
  dark?: string;
} = {};

const useColorVariable = (colorVariable: COLOR_VARIABLES) => {
  switch (colorVariable) {
    case "DEFAULT_TEXT":
      themeColor.light = theme.colors.gray[800];
      themeColor.dark = theme.colors.whiteAlpha[900];
      break;

    case "SUBTLE_TEXT":
      themeColor.light = theme.colors.gray[600];
      themeColor.dark = theme.colors.gray[400];
      break;

    case "DEFAULT_BACKGROUND":
      themeColor.light = theme.colors.white;
      themeColor.dark = theme.colors.gray[800];
      break;

    case "CARD_BACKGROUND":
      themeColor.light = theme.colors.white;
      themeColor.dark = theme.colors.gray[700];
      break;

    case "SUBTLE_BACKGROUND":
      themeColor.light = theme.colors.gray[100];
      themeColor.dark = theme.colors.gray[700];
      break;

    case "PLACEHOLDER":
      themeColor.light = theme.colors.gray[500];
      themeColor.dark = theme.colors.whiteAlpha[400];
      break;

    case "COLOR_MODE_SWITCH":
      themeColor.light = theme.colors.gray[800];
      themeColor.dark = theme.colors.yellow[300];
      break;

    case "SCROLLBAR_THEME":
      // scrollbar theme name leveraged from documentaion -https://kingsora.github.io/OverlayScrollbars/
      themeColor.light = "os-theme-dark";
      themeColor.dark = "os-theme-light";
      break;
  }
  return useColorModeValue(themeColor.light, themeColor.dark);
};

export default useColorVariable;
