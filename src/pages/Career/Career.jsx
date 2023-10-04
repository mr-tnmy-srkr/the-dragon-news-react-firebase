import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Career = () => {
  return (
    <>
      <Header></Header>
      <div className=" flex items-center justify-center flex-col mt-48">
        <h2 className="text-center text-2xl my-auto">coming soon ...</h2>
        <Link to={`/`} className="flex items-center mt-4">
          <span className="text-2xl mr-4 ">Go to</span>{" "}
          <button className="btn btn-info capitalize btn-sm"> home</button>
        </Link>
      </div>
    </>
  );
};

export default Career;
