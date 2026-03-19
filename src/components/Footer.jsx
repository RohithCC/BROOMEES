import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>House Maid</li>
            <li>Cooking Maid</li>
            <li>Baby Caretaker</li>
            <li>All Rounders</li>
            <li>Cook in Bangalore</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className="font-semibold mb-4">Services in Cities</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Maid Service in Delhi</li>
            <li>Maid Service in Gurgaon</li>
            <li>Maid Service in Noida</li>
            <li>Maid Service in Pune</li>
            <li>Maid Service in Bangalore</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4">About Broomees</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Our Mission</li>
            <li>Our Team</li>
            <li>Blog</li>
            <li>Payment Details</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Register as a Broomee</li>
            <li>Apply for Internship</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t mt-12 py-6 text-center text-gray-600 text-sm">
        <p>+91 8401-8401-42 | support@broomees.com</p>
        <p className="mt-2">
          Copyright © Broomees. All Rights Reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;