import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsNews = () => {
  
  const [data, setData] = useState([]);

  const news = useLoaderData();
  // console.log(news);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const findNews = news.find((item) => item._id === id);
    // console.log(findNews);
    setData(findNews);
  }, [id, news]);


  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 my-10">
        <div className="col-span-3 ">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-full">
              <img className="w-full"
                src={data.image_url}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-semibold">{data.title}</h2>
              <p className="text-lg font-medium">{data.details}</p>
              <div className="card-actions justify-start">
               <Link to="/"> <button  className="btn btn-neutral mt-4">Go back</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default DetailsNews;
