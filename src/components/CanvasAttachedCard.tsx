import { Box, Card, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { TRANSITION_DEFAULT } from "../consts";
import useColorVariable from "../hooks/useColorVariable";

interface CanvasAttachedCardProps {
  isActive: boolean;
  children?: ReactNode;
}

const CanvasAttachedCard = ({
  isActive,
  children,
}: CanvasAttachedCardProps) => {
  const defaultBGColor = useColorVariable("CARD_BACKGROUND");

  const getAttachedCurveStyleElement = (
    elementPosition: "top-right" | "bottom-right"
  ) => {
    const boxShadowVeticalOffset =
      elementPosition === "bottom-right" ? "-0.5rem" : "0.5rem";

    return (
      <Box
        position="absolute"
        top={elementPosition === "top-right" ? "-1rem" : undefined}
        bottom={elementPosition === "bottom-right" ? "-1rem" : undefined}
        right={0}
        width="1rem"
        height="1rem"
        borderRadius="50%"
        border="none"
        boxShadow={`0.5rem ${boxShadowVeticalOffset} ${defaultBGColor}`}
      ></Box>
    );
  };

  if (!isActive) {
    return (
      <Card
        backgroundColor="transparent"
        color={defaultBGColor}
        boxShadow=""
        p={4}
        transition={TRANSITION_DEFAULT}
        _hover={{ fontSize: "2xl" }}
      >
        <Text fontWeight="semibold">{children}</Text>
      </Card>
    );
  }

  return (
    <Card
      zIndex="docked"
      borderLeftRadius="xl"
      boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      clipPath="inset(-50px 0px -50px -50px)"
      p={4}
    >
      {getAttachedCurveStyleElement("top-right")}
      {getAttachedCurveStyleElement("bottom-right")}
      <Text fontWeight="semibold" fontSize="2xl">
        {children}
      </Text>
    </Card>
  );
};

export default CanvasAttachedCard;
