import React from "react";

function ReviewCard(props) {
  return (
    <div className=" relative group w-full md:w-1/3 bg-[#242424] border-2 border-l-indigo-300 md:border-none p-5 rounded-lg shadow-[rgba(0,0,0,0.99)]  overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-indigo-500">
      {/* Overlay */}
      <div className="absolute left-0 top-0 w-full h-full bg-orange-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      <div>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum enim velit quas magnam quaerat excepturi autem, exercitationem, ratione quis error voluptas, sequiratione quis error voluptas, sequi facere neque illo
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img src={props.img} alt="" className="rounded-full object-cover w-14 h-14"/>
        <h3 className="font-semibold text-white">{props.name}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;
