import React from "react";

const services = [
  {
    title: "24 Hrs – Japas",
    rating: "4.4",
    img: "https://broomees.com/attachments/services/BroomeesElederlyCare1.jpg",
  },
  {
    title: "Cooks",
    rating: "4.8",
    img: "https://broomees.com/attachments/services/BroomeesElederlyCare1.jpg",
  },
  {
    title: "24 hrs – Full Time",
    rating: "4.4",
    img: "https://broomees.com/attachments/services/BroomeesElederlyCare1.jpg",
  },
  {
    title: "Domestic help",
    rating: "4.3",
    img: "https://broomees.com/attachments/services/BroomeesElederlyCare1.jpg",
  },
  {
    title: "On-Demand",
    rating: "4.7",
    img: "https://broomees.com/attachments/services/BroomeesElederlyCare1.jpg",
  },
];

const FeaturedServices = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Our Featured Services
          </h2>

          <p className="text-gray-600 mt-2">
            Broomees offers completely verified workers with a replacement policy
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
            >

              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-32 object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-center">
                {service.title}
              </h3>

              {/* Rating */}
              <div className="flex justify-center items-center mt-2 text-yellow-500 text-sm">
                ⭐⭐⭐⭐⭐
                <span className="text-gray-600 ml-2">
                  {service.rating}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedServices;