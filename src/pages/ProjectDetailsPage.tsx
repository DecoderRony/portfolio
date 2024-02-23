import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProjectCover from "../components/ProjectCover";
import ProjectDetails from "../components/ProjectDetails";
import ProjectDetailsPageContainer from "../components/ProjectDetailsPageContainer";
import UserService from "../services/user-service";
import { DARK_MODE_SUBTLE_TEXT, LIGHT_MODE_SUBTLE_TEXT } from "../consts";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = UserService.getProject(projectId);

  const projectDescriptionColor = useColorModeValue(
    LIGHT_MODE_SUBTLE_TEXT,
    DARK_MODE_SUBTLE_TEXT
  );

  if (!project) {
    return (
      <ProjectDetailsPageContainer>
        <Flex mt={4} justifyContent="center">
          <Text w="80%" align="center" fontWeight="bolder" fontSize="4xl">
            Cannot find the project you are looking for. We might be working on
            it later. Stay tuned.
          </Text>
        </Flex>
      </ProjectDetailsPageContainer>
    );
  }

  return (
    <ProjectDetailsPageContainer>
      <ProjectCover coverImage={project.coverImage} />
      <Box px={20} pos="relative" top={-10}>
        <Heading as="h1" size="2xl" mb={8}>
          {project.name}
        </Heading>
        <Heading
          fontStyle="italic"
          color={projectDescriptionColor}
          size="lg"
          mb={12}
        >
          {project.description}
        </Heading>
        <ProjectDetails project={project} />
      </Box>
    </ProjectDetailsPageContainer>
  );
};

export default ProjectDetailsPage;
