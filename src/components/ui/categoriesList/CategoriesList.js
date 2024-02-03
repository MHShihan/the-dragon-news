import { getAllCategories } from "@/utils/getAllCategories";

const CategoriesList = async () => {
  const { data } = await getAllCategories();
  console.log(data);
  return <div>I am from Categories List</div>;
};

export default CategoriesList;
