import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData ,useParams } from "react-router-dom";

const DetailsNews = () => {
  const [data,setData]=useState([])

const news = useLoaderData()
// console.log(news);

const {id} = useParams()
// console.log(id);

useEffect(()=>{
  const findNews = news.find(item=>item._id===id)
  // console.log(findNews);
  setData(findNews)
},[id, news])

  return (

    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 my-10">
        <div className="col-span-3 border-black border">
          <img src={data.image_url} alt="" />
        </div>
        <div className="border border-black">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default DetailsNews;
