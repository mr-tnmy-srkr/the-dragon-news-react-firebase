import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="p-4 bg-[#F3F3F3]">
    <div className="flex ">
      <button className="btn btn-secondary capitalize">Breaking News</button>
      <Marquee pauseOnHover={true} speed={120}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div></div>
  );
};

export default BreakingNews;
