import React from "react";

const investors = [
  {
    name: "Magic Fund",
    logo: "https://broomees.com/assets/Badges/VC/MagicFund.svg",
  },
  {
    name: "2am VC",
    logo: "https://broomees.com/assets/Badges/VC/2amVC.svg",
  },
  {
    name: "SAT",
    logo: "https://broomees.com/assets/Badges/VC/SAT.svg",
  },
  {
    name: "100X",
    logo: "https://broomees.com/assets/Badges/VC/100x.svg",
  },
  {
    name: "Dholakia Ventures",
    logo: "https://broomees.com/assets/Badges/VC/Dholakia.svg",
  },
  {
    name: "Iversic Ventures",
    logo: "https://broomees.com/assets/Badges/VC/Riverside.png",
  },
];

const BackedBy = () => {
  return (
    <section className="bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-gray-700 text-lg mb-8 font-medium">
          Backed By
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10">

          {investors.map((investor, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={investor.logo}
                alt={investor.name}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BackedBy;