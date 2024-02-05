import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
  const { data: news } = await getAllNews();
  console.log(news);
  return (
    <Box className="mr-5">
      <Card className="my-10">
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} width={900} alt="top news" />
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

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={900} alt="top news 2" />
              </CardMedia>
              <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
                Technology
              </p>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again.
                </Typography>
                <Typography variant="body1">
                  By Mahmududl Hasan - 03 February 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again. Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept
                  it Again.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={900} alt="top news 2" />
              </CardMedia>
              <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
                Technology
              </p>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again.
                </Typography>
                <Typography variant="body1">
                  By Mahmududl Hasan - 03 February 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again. Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept
                  it Again.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={900} alt="top news 2" />
              </CardMedia>
              <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
                Technology
              </p>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again.
                </Typography>
                <Typography variant="body1">
                  By Mahmududl Hasan - 03 February 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again. Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept
                  it Again.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} width={900} alt="top news 2" />
              </CardMedia>
              <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
                Technology
              </p>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again.
                </Typography>
                <Typography variant="body1">
                  By Mahmududl Hasan - 03 February 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept it
                  Again. Bitcoin Climbs as Elon Mask Says Tesla Likely to Accept
                  it Again.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
