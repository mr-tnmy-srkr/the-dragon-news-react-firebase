import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  // console.log('login page state from private route',location.state);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    /* const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password); */

    // or

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
    .then(result => {
      console.log(result.user)


      //navigate after login
      navigate(location?.state ? location.state : '/')
    })
      .catch((error) => {
        console.error(error);
        
      });
    
  };

  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center font-semibold">
        Login your account
      </h2>

      <div className="bg-[#F3F3F3]">
        <form
          onSubmit={handleLogin}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className=" border-black p-10 bg-white">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered "
                autoComplete="on"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#403F3F] capitalize">
                Login
              </button>
            </div>
            <div className=" mt-5 text-center">
              Don’t Have An Account ?{" "}
              <Link to="/register" className="text-red-600 font-semibold">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
