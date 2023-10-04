import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

const {createUser} = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    /* const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password); */

    // or

    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const name = form.get("name");
    const photo = form.get("photo_url");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);


//create user
createUser(email,password)
.then(result=>console.log(result.user))
.catch(err=>console.error(err))

  };

  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center font-semibold">
        Register your account
      </h2>

      <div className="bg-[#F3F3F3]">
        <form
          onSubmit={handleRegister}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className=" border-black p-10 bg-white">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo_url"
                type="text"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                autoComplete="on"
                placeholder="Enter your password"
                className="input input-bordered "
                required
              />
              <div className="flex gap-2 mt-4">
                <input type="checkbox" name="" id="" className="w-5" required />
                <p>
                  Accept 
                  <a href="#" className="font-bold ml-1">
                     Term & Conditions
                  </a>
                </p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#403F3F] capitalize">
                Register
              </button>
            </div>
            <div className=" mt-5 text-center">
              Already Have An Account ?{" "}
              <Link to="/login" className="text-red-600 font-semibold">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
