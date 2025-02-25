import React from "react";
// import f from "../../images/f-removebg-preview.png";

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className="space-y-4">
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            natus at et cumque asperiores perspiciatis commodi obcaecati dolore
            optio, sapiente expedita delectus vel magnam sit distinctio eum
            vitae ipsam illo.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* <img src={f} alt="Facebook" className="w-20 h-10 md:w-30 md:h-10" /> */}
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-xl font-semibold hover:text-orange-500 md:text-left">
            COMPANY
          </h2>
          <ul className="mt-2 space-y-1">
            <li className="hover:text-orange-300 cursor-pointer">Home</li>
            <li className="hover:text-orange-300 cursor-pointer">About us</li>
            <li className="hover:text-orange-300 cursor-pointer">Delivery</li>
            <li className="hover:text-orange-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>+1 234 456 6540</li>
            <li>myfood@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 my-6" />
      <p className="text-center text-gray-300 text-sm">
        &copy; 2024 tomato.com - All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
