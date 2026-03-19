import { useState } from "react";
import testimonials from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < testimonials.length - 2) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}

        <div>

          <h4 className="text-yellow-500 text-lg font-semibold">
            Testimonials
          </h4>

          <p className="text-gray-500 mt-4 text-xl">
            Don't Believe Us?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            Check What Our
            <br />
            Customers Say
            <br />
            About Us
          </h2>

        </div>

        {/* CAROUSEL */}

        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 50}%)` }}
          >

            {testimonials.map((item) => (
              <div className="w-full md:w-1/2 p-4 flex-shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}

          </div>

          {/* NAVIGATION */}

          <div className="flex justify-center mt-6 gap-3">

            {testimonials.slice(0, testimonials.length - 1).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i
                    ? "w-8 bg-gray-700"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;