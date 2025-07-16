"use client";

import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form className="bg-gray-800 p-6 rounded-lg space-y-4 w-80">
        <h2 className="text-2xl font-bold text-blue-400">Reset Password</h2>
        <p className="text-sm text-gray-400">
          Enter your email and we'll send you reset instructions.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-gray-700 rounded text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
