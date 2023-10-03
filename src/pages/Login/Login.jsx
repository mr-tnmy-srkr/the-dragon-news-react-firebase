import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-">Login your account</h2>

     <div className="border ">
     <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input
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
            type="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#403F3F]">Login</button>
        </div>
      </form>
      <div>
      Dont’t Have An Account ? Register
      </div>
     </div>
    </div>
  );
};

export default Login;
