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
import Link from "next/link";

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
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
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
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography variant="body1" className="my-2">
                      {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 300
                        ? news.details.slice(0, 300) + "...."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicCategories;
