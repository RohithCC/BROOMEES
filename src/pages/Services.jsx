import React from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-12">
          Want your chores simplified? <br />
          <span className="text-gray-700">Book a Broomee</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2">

          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

        </div>

      </div>

      <WhyChooseUs />

    </section>
  );
};

export default Services;