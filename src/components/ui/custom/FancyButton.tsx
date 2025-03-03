import { Icon } from "@chakra-ui/react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "../chakra/button";
import { ReactNode } from "react";
import { RiArrowRightLine } from "react-icons/ri";

interface FancyButtonProps extends ChakraButtonProps {
  label: string;
  theme?: "primary" | "secondary";
  icon?: ReactNode;
  showIcon?: boolean;
}

const FancyButton = ({
  label,
  theme = "primary",
  showIcon = true,
  icon = <RiArrowRightLine />,
  ...rest
}: FancyButtonProps) => {
  if (!showIcon) {
    return (
      <ChakraButton
        fontWeight="bold"
        border="none"
        className="group"
        bg={theme === "primary" ? "primary" : "secondary"}
        _before={{
          content: `""`,
          position: "absolute",
          rounded: "sm",
          top: 0,
          left: "0",
          width: "0",
          height: "100%",
          bg: theme === "primary" ? "primary.darker" : "secondary.darker",
          zIndex: "hide",
          transitionProperty: "all",
          transitionDuration: "slow",
          transitionTimingFunction: "ease-in",
        }}
        _hover={{
          _before: {
            width: "full",
          },
        }}
        {...rest}
      >
        {label}{" "}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton
      fontWeight="bold"
      border="none"
      position="relative"
      className="group"
      bg={theme === "primary" ? "primary" : "secondary"}
      transitionProperty="all"
      transitionDuration="slow"
      transitionTimingFunction="ease-in"
      _before={{
        content: `""`,
        position: "absolute",
        rounded: "sm",
        top: 0,
        left: "0",
        width: "0",
        height: "100%",
        bg: theme === "primary" ? "primary.darker" : "secondary.darker",
        zIndex: "hide",
        transitionProperty: "all",
        transitionDuration: "slow",
        transitionTimingFunction: "ease-in",
      }}
      _hover={{
        pr: "10",
        _before: {
          width: "full",
        },
        transitionProperty: "all",
        transitionDuration: "moderate",
        transitionTimingFunction: "ease-in",
      }}
      {...rest}
    >
      {label}{" "}
      <Icon
        position="absolute"
        right="0"
        opacity="0"
        size="md"
        visibility="hidden"
        transitionProperty="all"
        transitionDuration="slow"
        transitionTimingFunction="ease-in"
        _groupHover={{
          right: "3",
          opacity: "1",
          visibility: "visible",
          transitionProperty: "all",
          transitionDuration: "moderate",
          transitionTimingFunction: "ease-in",
        }}
      >
        {icon}
      </Icon>
    </ChakraButton>
  );
};

export default FancyButton;
