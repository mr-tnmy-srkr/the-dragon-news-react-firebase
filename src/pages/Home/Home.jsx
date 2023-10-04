// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { getProducts } from "../../utils/getProducts";
import { useEffect, useState } from "react";

const Home = () => {
  const [catId, setCatId] = useState(null);
  const [filteredNews, setFilteredNews] = useState([]);
  const news = useLoaderData();
  // console.log(news);

  const handleLoadCategoryNews = (id) => {
    // console.log("i am category",id);
    setCatId(id);
  };
  useEffect(() => {
    const filteredData = news.filter((aNews) => aNews.category_id == catId);
    // console.log(filteredData);
    setFilteredNews(filteredData);
  }, [catId, news]);

  // console.log(catId);
  // console.log(filteredNews);

  return (
    <div>
      <div className="my-3">
        <Header></Header>
      </div>
      <div className="my-3">
        <BreakingNews></BreakingNews>
      </div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6">
        <div className=" ">
          <LeftSideNav
            handleLoadCategoryNews={handleLoadCategoryNews}
          ></LeftSideNav>
        </div>

        {filteredNews.length ? (
          <div className=" md:col-span-2">
            {filteredNews.map((aNews, idx) => (
              <NewsCard key={idx} news={aNews}></NewsCard>
            ))}
          </div>
        ) : (
          <div className=" md:col-span-2">
            {news.map((aNews, idx) => (
              <NewsCard key={idx} news={aNews}></NewsCard>
            ))}
          </div>
        )}

        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
