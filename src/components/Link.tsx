import { HStack, Icon, SystemProps, Text, theme } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { TRANSITION_SLOWER } from "../consts";
import useColorVariable from "../hooks/useColorVariable";

interface LinkProps extends SystemProps {
  children?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  handleClick: () => void;
}

const Link = ({
  children,
  leftIcon,
  rightIcon,
  handleClick,
  ...chakraSystemProps
}: LinkProps) => {
  if (!children) return;

  const linkColor = useColorVariable("BLUE");

  return (
    <HStack
      fontSize="xl"
      alignItems="center"
      display="inline-flex"
      position="relative"
      color={linkColor}
      _hover={{
        cursor: "pointer",
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "bottom center",
        },
      }}
      _after={{
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: "-0.1rem",
        left: 0,
        backgroundColor: linkColor,
        transformOrigin: "bottom center",
        transition: TRANSITION_SLOWER,
      }}
      {...chakraSystemProps}
      onClick={handleClick}
    >
      {leftIcon && <Icon as={leftIcon} mr={2} />}
      <Text as="b">{children}</Text>
      {rightIcon && <Icon as={rightIcon} ml={2} />}
    </HStack>
  );
};

export default Link;
