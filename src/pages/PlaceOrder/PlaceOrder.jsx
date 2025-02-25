import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const specialties = [
  {
    name: "Greek Salad",
    description:
      "Avocados with crab meat, red onion, crab salad red bell pepper...",
    price: "$39.00",
    image:
      "https://media.istockphoto.com/id/958879492/photo/chickpea-and-fresh-vegetables-salad-in-ceramic-bowl.jpg?s=612x612&w=0&k=20&c=MJGgvNM5dyXv6cca1TRiNOgAOFPM8CP9kk-ixQf9lxM=",
  },
  {
    name: "Tokusen Wagyu",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives...",
    price: "$45.00",
    image:
      "https://media.istockphoto.com/id/1141643083/photo/chickpea-salad-with-vegetables-and-microgreens.jpg?s=612x612&w=0&k=20&c=t6QzixT02u0vGl5wnZP4aMhmIppjwZWPmctLNzXjdaY=",
  },
  {
    name: "Butternut Pumpkin",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed bell pepper...",
    price: "$15.00",
    image:
      "https://media.istockphoto.com/id/1278972103/photo/vegetarian-salad-quinoa-tomatoes-cucumbers-chickpeas-olives-herbs-cottage-cheese.jpg?s=612x612&w=0&k=20&c=IOJNrLnfZGZzXZL7cVjnyaANXq1eS3vuXKGRhR7Z744=",
  },
  {
    name: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
    price: "$12.00",
    image:
      "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
    price: "$12.00",
    image:
      "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
    price: "$12.00",
    image:
      "https://media.istockphoto.com/id/1313786855/photo/chickpea-salad-with-cucumber-and-tomato.jpg?s=612x612&w=0&k=20&c=stktk6FC8MVbI992ie2WNTB-bvhF8VXnFKMDeD9kSes=",
  },
 
 
];

export default function PlaceOrder() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(specialties.length / itemsPerPage)
    );
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(specialties.length / itemsPerPage)) %
        Math.ceil(specialties.length / itemsPerPage)
    );
  };

  return (
    
<div className="text-white py-[10px] px-5 md:px-20 mt-20 bg-[url('https://avatars.mds.yandex.net/i?id=146711c2157fe368316f8cf674d927fb94c5d2d35aa7899f-5281697-images-thumbs&n=13')] bg-cover bg-center] ">

      
      <h2 className="text-center text-4xl font-semibold mb-6 p-2">
        Best Specialties
      </h2>
      <div className="relative overflow-hidden max-w-6xl mx-auto"> {/* Increased max width here */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3" 
            >
              <div className="bg-[#393939] rounded-2xl p-3 shadow-lg w-full transform transition-all hover:scale-105 mb-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[500px] h-52 object-cover rounded-xl transition-all hover:opacity-80" 
                />

                <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                <p className="text-gray-200 text-sm mt-2">{item.description}</p>
                <p className="text-lg font-bold mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg ml-1"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg mr-1"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
