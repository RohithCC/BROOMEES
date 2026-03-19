import React from "react";

const highlights = [
  {
    title: "Instant help in 15 mins ⚡",
    img: "https://broomees.com/attachments/sliders_img/images/broomIt.jpg",
    bg: "bg-white",
  },
  {
    title: "JOIN OUR Instagram community 150K Folks!",
    img: "https://broomees.com/attachments/sliders_img/images/150k.png",
    bg: "bg-yellow-400",
  },
  {
    title: "Customer Testimonial",
    img: "https://broomees.com/attachments/sliders_img/images/puneBangalore2.png",
    bg: "bg-white",
  },
  {
    title: "Identified & supported by MSME",
    img: "https://broomees.com/attachments/sliders_img/images/Republicday2.png",
    bg: "bg-blue-100",
  },
  {
    title: "FLAT 10% OFF",
    img: "https://broomees.com/attachments/sliders_img/images/malehelper.png",
    bg: "bg-yellow-400",
  },
  {
    title: "20,000+ Customers Served",
    img: "https://broomees.com/attachments/sliders_img/images/malehelper.png",
    bg: "bg-white",
  },
  {
    title: "5% OFF ON JAPA SERVICES",
    img: "https://broomees.com/attachments/sliders_img/images/malehelper.png",
    bg: "bg-pink-200",
  },
];

const Highlights = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl font-semibold mb-10">
          Highlights <span className="text-yellow-500">@Broomees</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {highlights.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 cursor-pointer`}
            >
              
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4 text-center font-semibold">
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Highlights;