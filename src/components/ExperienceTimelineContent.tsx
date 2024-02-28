import { Box, Text } from "@chakra-ui/react";
import { Experience } from "../consts";

interface ExperienceTimelineContentProps {
  experience: Experience;
}

const ExperienceTimelineContent = ({
  experience,
}: ExperienceTimelineContentProps) => {
  return (
    <Box ml={3}>
      <Text>{experience.role}</Text>
      <Text fontSize="1rem">{experience.company}</Text>
      <Text fontSize="0.8rem">{`${experience.startDate} - ${
        experience.endData ? experience.endData : "Present"
      }`}</Text>
    </Box>
  );
};

export default ExperienceTimelineContent;
