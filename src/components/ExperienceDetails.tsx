import { Text } from "@chakra-ui/react";
import { Experience } from "../consts";
import TechStack from "./TechStack";

interface ExperienceDetailsProps {
  experience?: Experience;
}

const ExperienceDetails = ({ experience }: ExperienceDetailsProps) => {
  if (experience === undefined) return;
  return (
    <>
      <Text mb={1}>{experience.description}</Text>
      <Text mb={2}>Technologies:</Text>
      <TechStack technologies={experience.technology} />
    </>
  );
};

export default ExperienceDetails;
