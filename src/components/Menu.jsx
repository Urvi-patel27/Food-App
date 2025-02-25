import React, { useState } from "react";
import Cart from "../pages/Cart/Cart";
import FoodItem from "./FoodItem/FoodItem";
import ExploreMenu from "./ExploreMenu/ExploreMenu";

const menuItems = [
  {
    name: "Greek Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: "$25.50",
    image:
      "https://thumbs.dreamstime.com/b/salad-fresh-vegetables-ceramic-bowl-wooden-background-40553409.jpg",
  },
  {
    name: "Lasagne",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: "$40.00",
    image:
      "https://media.istockphoto.com/id/500121583/photo/bowl-of-salad-on-white.jpg?s=612x612&w=0&k=20&c=Ea4mE_Vi4_oqZBquJbHh01x_JRWgFrhL5oymfwbE9q4=",
    tag: "SEASONAL",
  },
  {
    name: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    price: "$10.00",
    image:
      "https://avatars.mds.yandex.net/i?id=678bf666080047c8c63bf08a9df19f2406ee9562-3084551-images-thumbs&n=13",
  },
  {
    name: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: "$39.00",
    image:
      "https://avatars.mds.yandex.net/i?id=c877176b5d0082ceb0d40260097f40ee57324b0d-9849111-images-thumbs&n=13",
    tag: "NEW",
  },
  {
    name: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: "$25.00",
    image:
      "https://obed37.ru/images/products/2a8a8fe1766eba0d43496a3205c64db8.jpg",
  },
  {
    name: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: "$49.00",
    image:
      "https://avatars.mds.yandex.net/i?id=4595bebd85df5bf698c20e133f2c666644db5de6-5453402-images-thumbs&n=13",
  },
];

const Menu = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
  <ExploreMenu category={category} setCategory={setCategory} />
    <div className="bg-blac text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 p-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-[#181818]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg border border-gray-700"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <span className="text-yellow-400 font-bold">{item.price}</span>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
              {item.tag && (
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md mt-2 inline-block">
                  {item.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    <Cart/>
    </>
  );
};



export default Menu;
