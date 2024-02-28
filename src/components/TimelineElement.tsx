import { Box, BoxProps, ColorMode, Text, useColorMode } from "@chakra-ui/react";
import {
  DARK_MODE_DEFAULT_TEXT,
  DARK_MODE_SUBTLE_TEXT,
  DARK_MODE_TIMELINE_DOT_HOVER_COLOR,
  Experience,
  LIGHT_MODE_DEFAULT_TEXT,
  LIGHT_MODE_SUBTLE_TEXT,
} from "../consts";

interface TimelineElementProps {
  experience: Experience;
  currentActiveExperience?: Experience;
  onChangeExperience: (experience: Experience) => void;
}

const getPseudoElementStyles = (isHovered: boolean, colorMode: ColorMode) => {
  return isHovered
    ? {
        content: `""`,
        position: "absolute",
        width: "1.3rem",
        height: "1.3rem",
        top: "1.2rem",
        left: "-0.57rem",
        borderRadius: "50%",
        zIndex: "1",
        background:
          colorMode === "dark"
            ? DARK_MODE_TIMELINE_DOT_HOVER_COLOR
            : LIGHT_MODE_DEFAULT_TEXT,
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
      }
    : {
        content: `""`,
        position: "absolute",
        width: "0.8rem",
        height: "0.8rem",
        top: "0.5em",
        left: "-0.32rem",
        borderRadius: "50%",
        zIndex: "1",
        background:
          colorMode === "dark" ? DARK_MODE_SUBTLE_TEXT : LIGHT_MODE_SUBTLE_TEXT,
        display: "inline-block",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
      };
};

const timelineContentStyles = (
  colorMode: ColorMode,
  experienceId: number,
  currentExperienceId?: number
): BoxProps => {
  return experienceId === currentExperienceId
    ? {
        position: "relative",
        mb: "2rem",
        transition: "font-size ease-in-out 0.2s",
        fontSize: "2.5rem",
        color:
          colorMode === "dark"
            ? DARK_MODE_DEFAULT_TEXT
            : LIGHT_MODE_DEFAULT_TEXT,
        pl: "2",
        _before: getPseudoElementStyles(true, colorMode),
      }
    : {
        position: "relative",
        mb: "2rem",
        transition: "font-size ease-in-out 0.2s",
        fontSize: "1.3rem",
        color:
          colorMode === "dark" ? DARK_MODE_SUBTLE_TEXT : LIGHT_MODE_SUBTLE_TEXT,
        pl: "2",
        _hover: {
          fontSize: "2.5rem",
          color:
            colorMode === "dark"
              ? DARK_MODE_DEFAULT_TEXT
              : LIGHT_MODE_DEFAULT_TEXT,
          cursor: "pointer",
          _before: getPseudoElementStyles(true, colorMode),
        },
        _before: getPseudoElementStyles(false, colorMode),
      };
};

const TimelineElement = ({
  experience,
  currentActiveExperience,
  onChangeExperience,
}: TimelineElementProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      key={experience.id}
      onClick={() => onChangeExperience(experience)}
      {...timelineContentStyles(
        colorMode,
        experience.id,
        currentActiveExperience?.id
      )}
    >
      <Box ml={3}>
        <Text>{experience.role}</Text>
        <Text fontSize="1rem">{experience.company}</Text>
        <Text fontSize="0.8rem">
          {`${experience.startDate} - ${
            experience.endData ? experience.endData : "Present"
          }`}
        </Text>
      </Box>
    </Box>
  );
};

export default TimelineElement;
