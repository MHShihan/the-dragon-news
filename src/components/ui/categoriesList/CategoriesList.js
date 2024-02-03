import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoriesList = async () => {
  const { data: allCategories } = await getAllCategories();
  //   console.log(data);
  return (
    <Box className="bg-gray-100 py-2 px-5">
      <Typography variant="h6">Categories</Typography>
      <Divider />
      <Stack rowGap={2} sx={{ mt: 2.5 }}>
        {allCategories?.map((category) => (
          <Button variant="outlined" key={category.id}>
            <Link
              href={`/categories/news?category=${category.title.toLowerCase()}`}
            >
              {category.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoriesList;
