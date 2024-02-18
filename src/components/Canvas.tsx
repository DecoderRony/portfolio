import { Card, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

const Canvas = () => {
  return (
    <Card borderRadius="xl" boxShadow="2xl" height="100%" overflow="auto" p={0}>
      <Box position="absolute" right={0} mt={4} mr={5}>
        <ColorModeSwitch />
      </Box>
      <Outlet />
    </Card>
  );
};

export default Canvas;
