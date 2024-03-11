import { Card } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import useColorVariable from "../hooks/useColorVariable";

const Canvas = () => {
  const scrollbarTheme_ = useColorVariable("SCROLLBAR_THEME");
  return (
    <Card borderRadius="xl" boxShadow="2xl" height="100%" overflow="auto" p={0}>
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: "move", theme: scrollbarTheme_ } }}
      >
        <Outlet />
      </OverlayScrollbarsComponent>
    </Card>
  );
};

export default Canvas;
