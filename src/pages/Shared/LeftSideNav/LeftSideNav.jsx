import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideCard from "./LeftSideCard";


const LeftSideNav = ({handleLoadCategoryNews}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  
  return (
    <>
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">All Categories</h2>
      {categories.map((category) => (
        <div
          onClick={()=>handleLoadCategoryNews(category.id)}
          // to={`/category/${category.id}`}
          key={category.id}
          className="block ml-4 text-xl font-semibold hover:cursor-pointer"
        >
          {category.name}
        </div>
      ))}
      <LeftSideCard></LeftSideCard>
    
    </div>

</>
  );
};

export default LeftSideNav;
