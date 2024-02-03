import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sidebarNews from "@/assets/side-top-news.png";

const Sidebar = () => {
  return (
    <Box>
      <Card className="my-10">
        <CardActionArea>
          <CardMedia>
            <Image src={sidebarNews} width={900} alt="top news" />
          </CardMedia>
          <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
            Technology
          </p>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it Again.
            </Typography>
            <Typography variant="body1">
              By Mahmududl Hasan - 03 February 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it Again.
              Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it Again.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Sidebar;
