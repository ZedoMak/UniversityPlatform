import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

 function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: send form to backend API
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-purple-600 to-black text-white p-12">
        <h1 className="text-3xl font-bold mb-4">uv</h1>
        <p className="text-lg mb-8 text-center">
          Welcome Back <br />
          Login into your account.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-6">Login into your Account</h2>
          <p className="text-gray-500 mb-6">
            Enter your email and password to login
          </p>
            </div>
          

          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100">
              <FcGoogle /> Google
            </button>
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100">
              <FaGithub /> Github
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute bg-white px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
              
            <input
              type="email"
              name="email"
              placeholder="eg. yonas@gmail.com"
              className="w-full border rounded-lg px-3 py-2"
              onChange={handleChange}
              value={form.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2"
              onChange={handleChange}
              value={form.password}
            />
            <p className="text-gray-500 text-sm">Must be at least 8 characters.</p>

            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-2 rounded-lg border hover:bg-gray-100"
            >
              Login 
            </button>
          </form>

          <p className="mt-6 text-gray-500 text-center">
            If you don't have an account?{" "}
            <a href="/login" className="text-black font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
