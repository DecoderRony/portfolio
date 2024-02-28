import { theme } from "@chakra-ui/react";

// BG color for both light and dark mode is same as inverse text color
// of theme in chakra UI.

export const DARK_MODE_DEFAULT_TEXT = theme.colors.whiteAlpha[900];
export const DARK_MODE_TIMELINE_BG = theme.colors.whiteAlpha[900];
export const DARK_MODE_DEFAULT_BG = theme.colors.gray[800];
export const DARK_MODE_CARD_BG = theme.colors.gray[700];
export const DARK_MODE_SUBTLE_BG = theme.colors.gray[700];
export const DARK_MODE_SUBTLE_TEXT = theme.colors.gray[400];
export const DARK_MODE_PLACEHOLDER_COLOR = theme.colors.whiteAlpha[400];
export const DARK_MODE_BUTTON_COLOR = theme.colors.yellow[300];
export const DARK_MODE_TIMELINE_DOT_HOVER_COLOR = theme.colors.white;

export const LIGHT_MODE_DEFAULT_TEXT = theme.colors.gray[800];
export const LIGHT_MODE_TIMELINE_BG = theme.colors.gray[400];
export const LIGHT_MODE_DEFAULT_BG = theme.colors.white;
export const LIGHT_MODE_CARD_BG = LIGHT_MODE_DEFAULT_BG;
export const LIGHT_MODE_SUBTLE_BG = theme.colors.gray[100];
export const LIGHT_MODE_SUBTLE_TEXT = theme.colors.gray[600];
export const LIGHT_MODE_PLACEHOLDER_COLOR = theme.colors.gray[500];
export const LIGHT_MODE_BUTTON_COLOR = theme.colors.gray[800];

export const TRANSITION_DEFAULT = "all 100ms ease-out";
export const TRANSITION_SLOWER = "all 150ms ease-out";
export const TRANSITION_SLOW = "all 300ms ease-out";

export interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  startDate: string;
  endData?: string;
  technology: string[];
}
