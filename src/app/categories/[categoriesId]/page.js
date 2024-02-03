import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const DynamicCategories = async ({ params, searchParams }) => {
  const { data: categoryNews } = await getCategoryNews(searchParams.category);
  console.log(categoryNews);

  return (
    <div className="pl-5">
      <h4>
        Total <strong>{searchParams.category}</strong> news:
        {categoryNews.length}
      </h4>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {categoryNews.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={news.thumbnail_url}
                    width={500}
                    height={400}
                    alt="top news 2"
                  />
                </CardMedia>
                <p className=" font-medium bg-red-500 p-1 rounded mx-4 mt-4 text-white inline-block">
                  {news.category}
                </p>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {news.title}
                  </Typography>
                  <Typography variant="body1" className="my-2">
                    {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicCategories;
