// import React from 'react';

import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
       <div className="my-3"><Header></Header></div>
      <div className="my-3"><BreakingNews></BreakingNews></div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-slate-600 ">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="bg-orange-300 md:col-span-2">
            <h2 className="text-4l">News coming soon</h2>
        </div>
        <div className="bg-emerald-200">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
