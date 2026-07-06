import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `" nav" " main"`,
          lg: `" nav nav" " aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <GridItem
          area="aside"
          bg="green"
          display={{ base: "none", lg: "block" }}
        >
          Nav
        </GridItem>
        <GridItem area="main" bg="red">
          Nav
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
