import { getSingleData } from "@/utils/getSingleNews";

const NewsDetailPage = async ({ params }) => {
  const { data } = await getSingleData(params.newsId);
  console.log(data);
  return (
    <div>
      <h1>{params.newsId}</h1>
    </div>
  );
};

export default NewsDetailPage;
