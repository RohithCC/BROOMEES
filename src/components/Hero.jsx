import React from "react";

const Hero = () => {
  return (
    <section className="bg-yellow-400 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        {/* Left Text */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            INDIA'S <br />
            <span className="bg-white px-2">TRUSTED</span> <br />
            HOME MAKERS .
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Broomees is the simplest way to get your life in order
            with the right domestic help
          </p>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-md">
            BOOK NOW
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              className="rounded-md mb-3"
            />
            <h3 className="font-semibold">Babysitters</h3>
            <p className="text-sm text-gray-500">
              Experienced babysitters for your child-care needs.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="rounded-md mb-3"
            />
            <h3 className="font-semibold">24 Hrs - Japas</h3>
            <p className="text-sm text-gray-500">
              Experienced japa for child-care support.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="https://images.unsplash.com/photo-1585421514738-01798e348b17"
              className="rounded-md mb-3"
            />
            <h3 className="font-semibold">Elderly Care</h3>
            <p className="text-sm text-gray-500">
              Caregivers for elderly support at home.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
              className="rounded-md mb-3"
            />
            <h3 className="font-semibold">All-Rounders</h3>
            <p className="text-sm text-gray-500">
              Cooking, cleaning and daily house help.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;