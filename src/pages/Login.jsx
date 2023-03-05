import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="flex items-center min-h-screen bg-gray-50 ">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center mt-6">
            <h1 className="text-xl font-medium text-gray-800">Login to your Samosa account</h1>
          </div>
          <div className="m-7">
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-600">Email</label>
                <input type="email" id="email" placeholder="you@example.com" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-lg font-medium text-gray-600">Password</label>
                  <Link to="#" className="text-Amber-400 hover:underline focus:text-yellow-600">Forgot password?</Link>
                </div>
                <input type="password" id="password" placeholder="**********" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-amber-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Login</button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-sm text-gray-600">Don't have an account yet? </span>
              <Link to="/signup" className="text-sm text-yellow-400 hover:text-yellow-600">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;