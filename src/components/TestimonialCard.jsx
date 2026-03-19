import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center relative">

      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img
          src={item.image}
          className="w-20 h-20 rounded-full border-4 border-white"
        />
      </div>

      <div className="mt-12">

        <h3 className="text-xl font-semibold">{item.name}</h3>

        <div className="flex justify-center mt-2 text-yellow-400">
          {[...Array(item.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <p className="font-semibold mt-2">{item.title}</p>

        <p className="text-gray-500 text-sm mt-3">
          {item.text}
        </p>

      </div>

    </div>
  );
};

export default TestimonialCard;