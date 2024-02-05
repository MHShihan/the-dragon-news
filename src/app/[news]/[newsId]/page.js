import { getSingleData } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleData(params.newsId);
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              className="rounded-md"
              alt="news details image"
            />
            <div container className="flex gap-4 flex-row mt-4 ">
              <Grid lg={6}>
                <Image
                  src={news.image_url}
                  className="rounded-md"
                  width={800}
                  height={500}
                  alt="news details image"
                />
              </Grid>
              <Grid lg={6}>
                <Image
                  src={news.image_url}
                  className="rounded-md"
                  width={800}
                  height={500}
                  alt="news details image"
                />
              </Grid>
            </div>
          </Grid>
          <Grid lg={6} className="pl-4">
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                marginTop: "3px",
              }}
            >
              <Avatar alt="Author Image " src={news.author.img} />

              <Typography>By {news.author.name}</Typography>
              <Typography>Published: {news.author.published_date}</Typography>
            </Box>
            <Typography
              sx={{
                marginTop: "20px",
                textAlign: "justify",
                whiteSpace: "pre-line",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;
