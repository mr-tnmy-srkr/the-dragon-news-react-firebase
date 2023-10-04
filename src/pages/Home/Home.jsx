// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

const news = useLoaderData();
// console.log(news);

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
        <div className="border-4 ">
          <LeftSideNav></LeftSideNav>
        </div>

        {/* news container */}
        <div className="border-4 md:col-span-2">
     { news.map(aNews =><NewsCard key={aNews.id} news={aNews}></NewsCard>)}
        </div>
        <div className="border-4">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
