import CategoriesList from "@/components/ui/categoriesList/CategoriesList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <CategoriesList></CategoriesList>
          </Grid>
          <Grid xs={9}>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
