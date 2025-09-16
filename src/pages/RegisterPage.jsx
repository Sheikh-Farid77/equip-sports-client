import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../provider/AuthProvider";

export default function RegisterPage() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  const {registerWithEmailAndPassword} = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      await registerWithEmailAndPassword(userInfo.email, userInfo.password, userInfo)
      navigate('/login')
      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="card-body p-8">
          <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="label text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={userInfo.name}
                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userInfo.email}
                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Photo url */}
            <div>
              <label className="label text-gray-600 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={userInfo.photo}
                name="photo"
                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Photo URL"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={userInfo.password}
                className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-neutral w-full mt-6 rounded-lg text-white font-semibold"
            >
              Register
            </button>
          </form>

          {/* Links */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              className="text-blue-600 font-semibold hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
