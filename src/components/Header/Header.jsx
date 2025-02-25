import React from "react";
import Buttons from "../../layouts/Buttons";
// import  "./Header.css"

function Header() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row justify-center items-center bg-[url('https://img.freepik.com/free-photo/vegetable-soup-concept-healthy-food-healthy-nutrition_185193-162790.jpg?ga=GA1.1.2116526810.1689847312&semt=ais_hybrid')] bg-cover bg-center bg-no-repeat bg-fixed object-cover">
      {/* bg-[url('https://edaeda.by/wp-content/uploads/2023/11/1619414630_21-phonoteka_org-p-fon-dlya-menyu-pitstsi-28.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */}
      <div className="w-full max-w-4xl px-6 text-center lg:text-left space-y-5 bg-black/150 p-5 rounded-lg">
        <h1 className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl">
          Lorem ipsum dolor sit amet consectetur bite.....
        </h1>
        <p className="text-white text-lg sm:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          deleniti quae minima veniam eaque distinctio quis quia ut ab sint.
        </p>
        <div className="mt-5">
          <Buttons title="Order Now" />
        </div>
      </div>
    </div>
  );
}

export default Header;
