import React from "react";

const InsuranceSection = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">

          {/* Health Insurance */}
          <div className="bg-[#f3e4c5] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition">

            <div className="max-w-md">
              <h3 className="text-orange-500 text-2xl font-semibold mb-3 border-b-2 border-orange-400 inline-block">
                Get Health Insurance
              </h3>

              <p className="text-gray-600 mt-3 mb-4">
                Get your worker the cheapest health insurance in partnership
                with us & secure their health & future.
              </p>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                Fill your details
              </button>
            </div>

            <img
              src="https://broomees.com/assets/images/refer1.jpg"
              alt="insurance"
              className="w-48 h-48 object-cover rounded-lg border-4 border-orange-400 mt-6 md:mt-0"
            />

          </div>

          {/* Refer Worker */}
          <div className="bg-[#cfe8f3] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition">

            <div className="max-w-md">
              <h3 className="text-cyan-600 text-2xl font-semibold mb-3 border-b-2 border-cyan-500 inline-block">
                Refer a worker (Broomee)
              </h3>

              <p className="text-gray-600 mt-3 mb-4">
                Do your bit by getting them a job that pays well! Help them
                register as a Broomee now & get rewards up to Rs.100
              </p>

              <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition">
                Fill your details
              </button>
            </div>

            <img
              src="https://broomees.com/assets/images/refer1.jpg"
              alt="refer worker"
              className="w-48 h-48 object-cover rounded-lg border-4 border-cyan-500 mt-6 md:mt-0"
            />

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="bg-[#f5dede] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition">

          <div className="max-w-md">
            <h3 className="text-red-500 text-2xl font-semibold mb-3 border-b-2 border-red-400 inline-block">
              Register as a worker (Broomee)
            </h3>

            <p className="text-gray-600 mt-3 mb-4">
              Register to work with us! Just fill this form, and we will get
              back to you.
            </p>

            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Fill your details
            </button>
          </div>

          <img
            src="https://broomees.com/assets/images/refer2.jpg"
            alt="register worker"
            className="w-52 h-56 object-cover rounded-lg border-4 border-red-400 mt-6 md:mt-0"
          />

        </div>

      </div>

    </section>
  );
};

export default InsuranceSection;