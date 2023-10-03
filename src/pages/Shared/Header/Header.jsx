import logo from "../../../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-8">
      <img className="mx-auto" src={logo} alt="logo" />
      <p className="mt-2">Journalism Without Fear or Favour</p>
      <p className="text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
