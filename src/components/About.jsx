import React from "react";
import Buttons from "../layouts/Buttons";
import Chef from "./Chef";
// import { img } from "framer-motion/client";

function About() {
  return (
  
    <>
      
      <div>
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center container mx-auto px-4 gap-10 mt-10">
          <img
            src="https://rolandia.eu/file/MC5kMGIwOS5Ub3AgNSByZXN0YXVyYW50cyBpbiBCdWNoYXJlc3QuanBnLnR4dA=="
            alt="Chef"
            className="object-cover max-w-full sm:w-[500px] h-[350px] lg:h-[400px] rounded-lg"
          />
          <div className="space-y-4 lg:pt-1 lg:max-w-xl text-center lg:text-left">
            <h1 className="font-semibold text-4xl text-white">
              WHY CHOOSE US?
            </h1>
            <p className="text-white text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, itaque? A tenetur quam odit est fugiat voluptatum
              excepturi cupiditate maxime optio esse, molestiae ullam quos nobis
              alias autem vel! Debitis?
            </p>
            <p className="text-white text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              voluptatibus debitis ea eveniet eligendi. Id fugit itaque quas et
              voluptatum sapiente provident, ad magni veniam?
            </p>
            <div className="flex justify-center lg:justify-start">
              <Buttons title="Learn More" />
            </div>
          </div>
        </div>

        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center container mx-auto px-4 gap-10 lg:mt-[-140px]">
          <div className="space-y-4 lg:pt-1 lg:max-w-xl text-center lg:text-left">
            <h1 className="font-semibold text-4xl text-white">
              OUR EXCELLENCE
            </h1>
            <p className="text-white text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, itaque? A tenetur quam odit est fugiat voluptatum
              excepturi cupiditate maxime optio esse, molestiae ullam quos nobis
              alias autem vel! Debitis?
            </p>
            <p className="text-white text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              voluptatibus debitis ea eveniet eligendi. Id fugit itaque quas et
              voluptatum sapiente provident, ad magni veniam?
            </p>
            <div className="flex justify-center lg:justify-start">
              <Buttons title="Learn More" />
            </div>
          </div>
          <img
            src="https://avatars.mds.yandex.net/i?id=380903e6c66f5d68d85caef18d09c5cb_l-10122878-images-thumbs&ref=rim&n=13&w=1598&h=1200"
            alt="Chef"
            className="object-cover max-w-full sm:w-[500px] h-[350px] lg:h-[400px] rounded-lg"
          />
        </div>
      </div>
      <Chef />
    </>
  );
}

export default About;
