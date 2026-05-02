import React from "react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          👤 My Account
        </h1>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <h2 className="text-lg font-medium">Guest User</h2>
            <p className="text-gray-500 text-sm">Not logged in</p>
          </div>
        </div>

        {/* Login / Signup */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          
          {/* Login */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Login</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded mb-3"
            />
            <button className="w-full  bg-gray-800 text-white py-2 rounded">
              Login
            </button>
          </div>

          {/* Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Signup</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded mb-3"
            />
            <button className="w-full bg-gray-800 text-white py-2 rounded">
              Create Account
            </button>
          </div>
        </div>

        {/* Orders Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">My Orders</h3>
          <div className="border p-4 rounded text-gray-500">
            No orders yet.
          </div>
        </div>

        {/* Logout Button */}
        <button className="bg-orange-400 text-white px-6 py-2 rounded">
          Logout
        </button>

      </div>
    </div>
  );
};

export default Account;