const NewsDetailPage = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>{params.newsId}</h1>
    </div>
  );
};

export default NewsDetailPage;
