import React, { useState } from "react";

const gallery = [
  "https://broomees.com/attachments/sliders_img/Sliderimg07.jpg",
  "https://broomees.com/attachments/sliders_img/Sliderimg10.jpg",
    "https://broomees.com/attachments/sliders_img/Sliderimg07.jpg",
  "https://broomees.com/attachments/sliders_img/Sliderimg10.jpg",
   "https://broomees.com/attachments/sliders_img/Sliderimg07.jpg",
  "https://broomees.com/attachments/sliders_img/Sliderimg10.jpg",
    "https://broomees.com/attachments/sliders_img/Sliderimg07.jpg",
  "https://broomees.com/attachments/sliders_img/Sliderimg10.jpg",
];

const teamMembers = [
  { name: "Pooja", role: "CRM - TL", category: "Customer Success", img: "https://broomees.com/attachments/team/1f222f7055820b4621403207b2e48c8a.jpg" },
  { name: "Nisha Biswas", role: "Customer Relationship Manager", category: "Customer Success", img: "https://broomees.com/attachments/team/ea15f95a5b47cb7d02e96e0abdfe43a5.jpg" },
  { name: "Payal", role: "Customer Relationship Manager", category: "Customer Success", img: "https://broomees.com/attachments/team/ea15f95a5b47cb7d02e96e0abdfe43a5.jpg" },
  { name: "Gourav", role: "Customer Relationship Manager", category: "Customer Success", img: "https://broomees.com/attachments/team/ea15f95a5b47cb7d02e96e0abdfe43a5.jpg" },
  { name: "Dimple Panchal", role: "Relationship Manager", category: "Operations", img: "https://broomees.com/attachments/team/ea15f95a5b47cb7d02e96e0abdfe43a5.jpg" },
  { name: "Rekha", role: "Relationship Manager", category: "Operations", img: "https://broomees.com/attachments/team/ea15f95a5b47cb7d02e96e0abdfe43a5.jpg" },
  { name: "Firdoshi", role: "Relationship Manager", category: "Operations", img: "https://broomees.com/attachments/team/ea15f95a5b47cb7d02e96e0abdfe43a5.jpg" },
  { name: "Naved", role: "Relationship Manager", category: "Operations", img: "https://broomees.com/attachments/team/1f222f7055820b4621403207b2e48c8a.jpg" }
];

const tabs = [
  "Founders",
  "Investors & Mentors",
  "Product & Tech",
  "Marketing & Design",
  "Customer Success",
  "Training & QA",
  "Operations",
  "Finance & Legal",
  "HR"
];

export default function AboutUs() {

  const [activeTab, setActiveTab] = useState("Customer Success");

  const filteredTeam = teamMembers.filter(
    member => member.category === activeTab
  );

  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold">
            We are <span className="text-yellow-500">Broomees</span>
          </h1>
          <p className="text-gray-600 mt-4">
            A team of go-getters to give you a smooth experience
          </p>
        </div>

        {/* IMAGE CAROUSEL */}
        <div className="overflow-hidden space-y-6 mb-16">

          {/* ROW 1 */}
          <div className="flex animate-scroll gap-6">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-64 h-40 object-cover rounded-xl shadow"
              />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex animate-scroll-reverse gap-6">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-64 h-40 object-cover rounded-xl shadow"
              />
            ))}
          </div>

        </div>

        {/* MISSION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Established in 2021, BROOMEES is enabling customers to hire
            experienced, verified and reliable professionals.
          </p>
        </div>

        {/* TEAM SECTION */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">
            Meet The <span className="text-yellow-500">Team</span>
          </h2>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-600">

          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 ${
                activeTab === tab
                  ? "border-yellow-500 text-black"
                  : "border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {filteredTeam.map((member, i) => (

            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 p-6 text-center"
            >

              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />

              <h3 className="font-semibold">{member.name}</h3>

              <p className="text-gray-500 text-sm">
                {member.role}
              </p>

              <p className="text-gray-400 text-xs mt-1">
                support@broomees.com
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}