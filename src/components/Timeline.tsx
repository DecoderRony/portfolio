import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import { DARK_MODE_TIMELINE_BG, LIGHT_MODE_TIMELINE_BG } from "../consts";

interface TimelineProps {
  contents: ReactElement[];
}

const Timeline = ({ contents }: TimelineProps) => {
  const timelineColor = useColorModeValue(
    LIGHT_MODE_TIMELINE_BG,
    DARK_MODE_TIMELINE_BG
  );

  return (
    <Box
      position="relative"
      _after={{
        content: `""`,
        position: "absolute",
        width: "0.2rem",
        background: timelineColor,
        top: 0,
        bottom: 0,
      }}
    >
      {[...contents]}
    </Box>
  );
};

export default Timeline;
