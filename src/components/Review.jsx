import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import Contact from "./Contact";
// import { Contact } from "lucide-react";
function Review() {

  return(
    <>
      <div className="min-h-screen flex flex-col items-center justify-center md:px-2 px-5 bg-gray-90 mt-[-10px]">
      <h1 className="font-semibold text-white text-4xl text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="flex flex-col md:flex-row gap-8 mt-5">
        <ReviewCard img={img1} name="Sofia Azuri" />
        <ReviewCard img={img2} name="Noor Jha" />
        <ReviewCard img={img3} name="John Name" />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mt-5">
        <ReviewCard img={img1} name="Sofia Azuri" />
        <ReviewCard img={img2} name="Noor Jha" />
        <ReviewCard img={img3} name="John Name" />
      </div>
    </div>

  <Contact/>
  </>
  )
}

export default Review;
