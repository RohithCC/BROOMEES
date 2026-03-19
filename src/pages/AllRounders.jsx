import React from "react";
import Testimonials from "./Testimonials";
import Features from "../components/Features";
import BackedBy from "../components/BackedBy";
import FAQ from "../components/FAQ";

const cities = [
  { name: "Delhi", icon: "https://broomees.com/attachments/city/8c3531cb58d5902e3777e6c78b9da19e.svg" },
  { name: "Noida", icon: "https://broomees.com/attachments/city/72ca11f69fab2eec23ad0df4f05d03d2.svg" },
  { name: "Gurgaon", icon: "https://broomees.com/attachments/city/9fc49f03b5fdb5ecf9549325c319c346.svg" },
  { name: "Ghaziabad", icon: "https://broomees.com/attachments/city/ghaziabad-city-icon-2.svg" },
  { name: "Pune", icon: "https://broomees.com/attachments/city/Puneicon4.svg" },
  { name: "Bengaluru", icon: "https://broomees.com/attachments/city/5db7f96c2d3d9aa9378c0f02d13cd562.png" },
];

const AllRounders = () => {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="border-b-8 border-yellow-400">
              All rounders
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Experienced and professional all-rounder workers.
            Feel free to customize your booking with a mix of
            cleaning & cooking!
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold transition">
            Book Now
          </button>

        </div>

        {/* RIGHT IMAGE / VIDEO */}

        <div className="border-[10px] border-yellow-400 rounded-2xl overflow-hidden shadow-lg">

                    <video
            src="https://broomees.com/attachments/services/2fef07401889f6ec8944b09a0097881a.mp4"
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            />
                    </div>

      </section>

      {/* STATS SECTION */}

      <section className="max-w-6xl mx-auto py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <div>
          <h2 className="text-5xl font-bold text-gray-700">
            100000 <span className="text-yellow-400">+</span>
          </h2>
          <p className="text-gray-500 mt-2">Verified Workers</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-gray-700">
            7500 <span className="text-yellow-400">+</span>
          </h2>
          <p className="text-gray-500 mt-2">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-gray-700">
            150 <span className="text-yellow-400">+</span>
          </h2>
          <p className="text-gray-500 mt-2">Pincodes & Counting</p>
        </div>

      </section>

      {/* BOOKING DETAILS */}

      <section className="bg-gray-100 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            <span className="border-b-8 border-yellow-400">
              BOOKING DETAILS
            </span>
          </h2>

          {/* CITY BOX */}

          <div className="bg-white shadow-lg rounded-xl p-10">

            <h3 className="text-lg font-semibold mb-8 border-b-2 pb-4 border-yellow-400">
              Select Your City
            </h3>

            <p className="text-center text-gray-600 mb-10">
              I'm looking for a broomee in
            </p>

            {/* CITIES */}

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">

              {cities.map((city, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                >

                  <div className="w-24 h-24 rounded-full border flex items-center justify-center group-hover:border-yellow-400 transition">

                    <img
                      src={city.icon}
                      alt={city.name}
                      className="w-12 opacity-70"
                    />

                  </div>

                  <p className="mt-3 text-gray-600 font-medium">
                    {city.name}
                  </p>

                </div>
              ))}

            </div>

            <p className="text-center text-gray-400 mt-10">
              Select the location where you'd like to book a Broomee
            </p>

          </div>

        </div>

      </section>


        <section className="bg-gray-100 py-1 text-center">
               <Testimonials />

        </section>

         <section className="py-1 text-center">
            <Features />
         </section>
           <section className="bg-gray-100 py-1 text-center">
              <BackedBy />

        </section>
          <section className="bg-gray-100 py-1 text-center">
             <FAQ />

        </section>

     

    </div>
  );
};

export default AllRounders;