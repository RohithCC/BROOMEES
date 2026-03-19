import React from "react";

const features = [
  {
    title: "Verification & Assessment",
    description:
      "Employing AI, we enhance our rigorous physical and telephonic verification processes to ensure the highest quality assessments of our workers",
    icon: "https://broomees.com/assets/images/icon_reliable.png",
  },
  {
    title: "Transparent Pricing",
    description:
      "You get what you pay for. Additionally, you get replacement guarantee, Covid-19 test reports, verification documents and more!",
    icon: "https://broomees.com/assets/images/icon_affordable.png",
  },
  {
    title: "Customer Support",
    description:
      "Our executives will always be there to hear you out and solve your issues",
    icon: "https://broomees.com/assets/images/icon_customer.png",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-14">
          Why Choose Us
        </h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group transition duration-300"
            >

              {/* Icon */}
              <div className="flex justify-center mb-6 relative">

                <div className="absolute w-16 h-16 bg-blue-100 rounded-full -top-2 -left-2 group-hover:scale-110 transition"></div>

                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-20 h-20 object-contain relative z-10 transform group-hover:scale-110 transition duration-300"
                />

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;