"use client";

import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form className="bg-gray-800 p-6 rounded-lg space-y-4 w-80">
        <h2 className="text-2xl font-bold text-blue-400">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-gray-700 rounded text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-gray-700 rounded text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
        >
          Sign In
        </button>
        <div className="text-sm text-right">
          <Link
            href="/forgot-password"
            className="text-blue-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
