import { skillsData } from "@/data/skillsData";
import { Box, Flex } from "@chakra-ui/react";
import SkillSection from "./SkillSection";
import ConceptsSection from "./ConceptsSection";

const SkillsPage = () => {
  return (
    <>
      <Flex h="full" w="full" align="center" hideBelow="lg">
        <Flex w="full" gap="16">
          <Flex direction="column" w="2/3" gap="8">
            <SkillSection
              title="Languages"
              description={skillsData.languages.description}
              skills={skillsData.languages.skills}
            />
            <SkillSection
              title="Frameworks"
              description={skillsData.frameworks.description}
              skills={skillsData.frameworks.skills}
            />
          </Flex>
          <Box w="1/3">
            <ConceptsSection
              title="Concepts"
              description={skillsData.concepts.description}
              skills={skillsData.concepts.skills}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" h="fit" pb="10" w="full" hideFrom="lg" gap="8">
        <SkillSection
          title="Languages"
          description={skillsData.languages.description}
          skills={skillsData.languages.skills}
        />
        <SkillSection
          title="Frameworks"
          description={skillsData.frameworks.description}
          skills={skillsData.frameworks.skills}
        />
        <ConceptsSection
          title="Concepts"
          description={skillsData.concepts.description}
          skills={skillsData.concepts.skills}
        />
      </Flex>
    </>
  );
};

export default SkillsPage;
