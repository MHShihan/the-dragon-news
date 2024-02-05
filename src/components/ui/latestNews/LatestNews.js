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
  const { data: allNews } = await getAllNews();
  // console.log(allNews);
  return (
    <Box className="mr-5">
      <Card className="my-10">
        <CardActionArea>
          <CardMedia>
            <Image
              src={allNews[0].thumbnail_url}
              width={900}
              height={500}
              alt="top news 2"
            />
          </CardMedia>
          <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
            {allNews[0].category}
          </p>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {allNews[0].title}
            </Typography>
            <Typography variant="body1">
              By {allNews[0].author.name} - {allNews[0].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {allNews[0].details.length > 300
                ? allNews[0].details.slice(0, 300) + "...."
                : allNews[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {allNews.slice(0, 4).map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card className="mt-8">
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    width={900}
                    height={600}
                    alt="top news 2"
                  />
                </CardMedia>
                <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-6 text-white inline-block">
                  {news.category}
                </p>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {news.title.length > 30
                      ? news.title.slice(0, 30) + "..."
                      : news.title}
                  </Typography>
                  <Typography variant="body1">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.length > 200
                      ? news.details.slice(0, 200) + "...."
                      : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
