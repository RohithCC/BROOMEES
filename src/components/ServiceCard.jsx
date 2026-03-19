import React from "react";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group">

      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
      />

      {/* Rating */}
      <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm shadow">
        <FaStar className="text-yellow-400" />
        {service.rating}
      </div>

      {/* Book Now Button */}
      <button className="absolute top-20 left-3 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
        Book Now !
      </button>

      {/* Bottom Label */}
      <div className="absolute bottom-0 left-0 bg-yellow-400 px-5 py-2 rounded-tr-xl font-semibold">
        {service.title}
      </div>

    </div>
  );
};

export default ServiceCard;