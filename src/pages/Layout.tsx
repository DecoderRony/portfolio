import {
  ResponsiveValue,
  Grid,
  Show,
  GridItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import Canvas from "../components/Canvas";
import SectionsList from "../components/SectionsList";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import ProfileLinks from "../components/ProfileLinks";

enum gridAreas {
  sidepanel = "sidepanel",
  mainarea = "mainarea",
  topbar = "topbar",
}

const templateAreas: ResponsiveValue<string> = {
  base: `
      "${gridAreas.topbar}"
      "${gridAreas.mainarea}"
    `,
  lg: `
      "${gridAreas.sidepanel} ${gridAreas.mainarea}"
  `,
};

const gridTemplateColumns = {
  base: "1fr",
  lg: "18rem 1fr",
};

const gridTemplateRows = {
  base: "3rem 1fr",
  lg: "1fr",
};

const Layout = () => {
  return (
    <Grid
      height="100vh"
      templateAreas={templateAreas}
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
      py={14}
    >
      <Show below="lg">
        <GridItem area={gridAreas.topbar}>
          <TopBar />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem
          area={gridAreas.sidepanel}
          height="100%"
          overflow="hidden"
          pl={10}
        >
          <Flex
            height="100%"
            direction="column"
            justifyContent="space-between"
            pt={14}
            pb={6}
          >
            <Box>
              <Box mb={10}>
                <Profile />
              </Box>
              <SectionsList />
            </Box>
            <ProfileLinks />
          </Flex>
        </GridItem>
      </Show>
      <GridItem
        area={gridAreas.mainarea}
        pr={10}
        height="100%"
        overflow="hidden"
      >
        <Canvas />
      </GridItem>
    </Grid>
  );
};

export default Layout;
