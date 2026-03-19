import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaCamera
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTACT DETAILS */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <FaPhoneAlt size={20} />
              </div>

              <div>
                <p className="text-gray-500">Phone Number</p>
                <p className="font-semibold">+91 8401-8401-42</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <FaEnvelope size={20} />
              </div>

              <div>
                <p className="text-gray-500">E-mail ID</p>
                <p className="font-semibold">support@broomees.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <FaWhatsapp size={20} />
              </div>

              <div>
                <p className="text-gray-500">Whatsapp</p>
                <p className="font-semibold">+91 8401-8401-42</p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 pt-4 text-xl">

              <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
              <FaCamera className="text-pink-500 cursor-pointer hover:scale-110 transition" />
              <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition" />
              <FaYoutube className="text-red-500 cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110 transition" />

            </div>

            {/* POLICY LINKS */}
            <div className="flex flex-wrap gap-8 text-gray-500 pt-4">

              <a href="#" className="hover:text-gray-800">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-gray-800">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-gray-800">
                Refund Policy
              </a>

            </div>

          </div>

          {/* RIGHT TESTIMONIAL */}
          <div className="flex flex-col items-center">

            <div className="bg-yellow-400 p-6 rounded-xl w-64 shadow-lg text-center">

              <h3 className="font-bold text-lg mb-4">
                CLIENT TESTIMONIAL
              </h3>

              <div className="bg-white rounded-xl p-4 text-sm">

                <p className="text-yellow-500 text-lg">★★★★★</p>

                <p className="mt-2 text-gray-700">
                  Broomees provides trustworthy and well-trained helpers.
                  Their commitment to quality service and customer satisfaction
                  really stands out.
                </p>

              </div>

            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Testimonials from customers
            </p>

          </div>

        </div>

        {/* APP DOWNLOAD SECTION */}

        <div className="mt-16 border-2 border-yellow-400 rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-700 font-medium text-center lg:text-left">
            Download the app and use the LIVE CHAT feature!
          </p>

          <div className="flex gap-6">

            <img
              src="/images/appstore.png"
              alt="App Store"
              className="h-12"
            />

            <img
              src="/images/googleplay.png"
              alt="Google Play"
              className="h-12"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;