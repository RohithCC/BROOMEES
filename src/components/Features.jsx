import features from "../data/features";

const Features = () => {
  return (
    <section className="bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-500 shadow">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm md:text-base font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;