import React from "react";
import { Link } from "react-router-dom";


function CategoryCard({ title, books, description, image, link }) {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">{books} books</p>
          <p className="text-gray-500 text-md">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;


