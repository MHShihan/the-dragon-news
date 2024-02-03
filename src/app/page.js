import LatestNews from "@/components/ui/latestNews/LatestNews";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div className="my-10">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid xs={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
