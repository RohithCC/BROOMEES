import React, { useState, useEffect } from "react";

const reviews = [
  {
    text: "Thanks to Broomees workers! They are very helpful and supportive for all kind of household work.",
    name: "Mr. Vardhit Rawat, Bangalore",
    image: "https://broomees.com/attachments/testimonials/8cd6081c977d2d175bd534a75f967dc0.jpg",
  },
  {
    text: "Broomees came to my rescue with their experienced Japa nurse who took care of both me and my baby.",
    name: "Mrs. Riya Raj, Pune",
    image: "https://broomees.com/attachments/testimonials/839f7b083dacbf586c4bd5c492e05a12.jpg",
  },
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT AREA */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 border-l-2 border-gray-300 ml-4"></div>

          {/* Active indicator */}
          <div
            className="absolute left-0 w-1 h-10 bg-red-500 ml-4 transition-all duration-500"
            style={{
              transform: `translateY(${index * 120}px)`
            }}
          ></div>

          <div className="pl-16">

            <div className="text-6xl text-gray-300 mb-4">“</div>

            <p className="text-2xl text-gray-800 leading-relaxed mb-6">
              {reviews[index].text}
            </p>

            <p className="text-gray-600 mb-3">
              {reviews[index].name}
            </p>

            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Add a review...
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE CARD */}

        <div className="flex justify-center">

          <div className="bg-gradient-to-br from-teal-500 to-purple-500 p-6 rounded-xl shadow-lg">

            <img
              src={reviews[index].image}
              alt="review"
              className="w-80 rounded-lg shadow-lg"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ReviewsSection;