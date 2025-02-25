import React from "react";

const strengths = [
  {
    title: "Hygienic Food",
    description: "Lorem Ipsum is simply dummy printing and typesetting.",
    icon: "fas fa-utensils", // Font Awesome icon class for Hygienic Food
  },
  {
    title: "Fresh Environment",
    description: "Lorem Ipsum is simpg and typesetting.",
    icon: "fas fa-leaf", // Font Awesome icon class for Fresh Environment
  },
  {
    title: "Skilled Chefs",
    description: "Lorem Ipsum is simply dummy printing and typesetting.",
    icon: "fa-solid fa-kitchen-set", // Font Awesome icon class for Skilled Chefs
  },
  {
    title: "Event & Party",
    description: "Lorem Ipsum is simply dummy printing and typesetting.",
    icon: "fas fa-birthday-cake", // Font Awesome icon class for Event & Party
  },
];

function Icons() {
  return (
    <div className="text-white py-16 mt-[10px]">
      <h2 className="text-center text-4xl  mb-12">Our Strength</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="relative bg-black p-8 rounded-lg text-center group overflow-hidden"
          >
            <div className="text-6xl mb-4 text-orange-300">
              <i className={strength.icon}></i> {/* Font Awesome icon */}
            </div>
            <h3 className="text-2xl font-semibold mb-2c text-yellow-100">{strength.title}</h3>
            <p className=" text-orange-100">{strength.description}</p>

     
            <div className="absolute inset-0 bg-[#33333356] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700" style={{
              backgroundImage: 'url("https://www.jigsawplanet.com/JoeCope/food?rc=fac")',
              
            }}>
              
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icons;
