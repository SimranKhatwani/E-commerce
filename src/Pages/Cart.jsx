import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = []; // empty for now

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
          🛒 My Cart
        </h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            
            {/* Icon */}
            <div className="text-6xl mb-4 text-orange-400">
              🛒
            </div>

            {/* Message */}
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven’t added anything yet.
            </p>

            {/* Button */}
            <Link to="/shop">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {/* Future: Cart Items UI */}
            Cart Items Here
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;