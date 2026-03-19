import React, { useState } from "react";

const stories = [
  {
    name: "Shashi's Story",
    text: "Meet Shashi, a dedicated helper who truly embodies the spirit of hard work and determination. Despite experiencing a devastating loss when her mother passed away, Shashi didn't let her grief hold her back. She started working the very next day, showing her unwavering commitment to serving others. Shashi's dedication to her job is an inspiration to all of us at Broomees India.",
    image: "https://broomees.com/attachments/workerStories/d0fce1ec8bdc4f10be3ffd513baa3ca1.png",
  },
  {
    name: "Rekha's Story",
    text: "Rekha joined Broomees with the goal of supporting her family. Through her dedication and consistent work ethic, she has become one of the most trusted helpers among our customers. Her journey reflects determination and perseverance.",
    image: "https://broomees.com/attachments/workerStories/08695168de9d367a8a25d155e97ade12.png",
  },
  {
    name: "Anita's Story",
    text: "Anita has been part of Broomees for several years. Her caring nature and positive attitude have made her a favorite among families she works with. Anita believes in providing the best service possible.",
    image: "https://broomees.com/attachments/workerStories/d0fce1ec8bdc4f10be3ffd513baa3ca1.png",
  },
];

const HumansOfBroomees = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl font-semibold mb-10">
          Humans of <span className="border-b-4 border-yellow-400">Broomees</span>
        </h2>

        {/* Story Card */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">

          {/* Text */}
          <div className="flex-1">

            <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b-2 inline-block border-yellow-400">
              {stories[index].name}
            </h3>

            <p className="text-gray-600 leading-relaxed mt-3">
              {stories[index].text}
            </p>

          </div>

          {/* Image */}
          <div className="flex-shrink-0">

            <img
              src={stories[index].image}
              alt={stories[index].name}
              className="w-48 h-48 rounded-full object-cover grayscale"
            />

          </div>

        </div>

        {/* Bottom Dots */}
        <div className="flex justify-center mt-6 gap-3">

          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-red-500 w-10"
                  : "bg-gray-300 w-6"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default HumansOfBroomees;