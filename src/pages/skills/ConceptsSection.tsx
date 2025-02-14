import Badge from "@/components/ui/custom/Badge";
import { MotionBox, MotionHeading, MotionText } from "@/components/ui/Motion";
import { grow, revealFromBottom, revealFromLeft } from "@/lib/animation";
import { Flex, Text } from "@chakra-ui/react";

interface ConceptsSectionProps {
  title: string;
  description: string;
  skills: string[];
}

const ConceptsSection = ({
  title,
  description,
  skills,
}: ConceptsSectionProps) => {
  return (
    <Flex direction="column" gap="3">
      <Flex direction="column" gap="2">
        <MotionHeading size="4xl" color="primary" {...revealFromLeft}>
          {title}
        </MotionHeading>
        <MotionBox h="1" bg="primary" rounded="sm" {...grow} />
      </Flex>
      <Flex w="full" direction="column" gap="4">
        <MotionText {...revealFromBottom} transition={{ delay: 0.2 }}>
          {description}
        </MotionText>
        <Flex wrap="wrap" gap="3">
          {skills.map((skill, i) => (
            <MotionBox
              key={skill}
              {...revealFromBottom}
              transition={{ delay: 0.4 + 0.1 * i }}
            >
              <Badge>
                <Text fontSize="sm" fontWeight="bold">
                  {skill}
                </Text>
              </Badge>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ConceptsSection;
