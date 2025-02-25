import React from 'react';

const ChefCard = ({ name, title, hover, imgUrl }) => (
  <div
    className={`relative p-4 ${hover ? 'hover:hover:bg-[#3d3d3d] transition-all ease-in-out duration-300 bg-[#2a2a2a] rounded-lg' : ''}`}
  >
    <div className="relative">
      <img src={imgUrl} alt={name} className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
      {hover && (
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-75">
          <div className="text-white text-center">
            <div className="text-2xl mb-2"></div>
            <div>{}</div>
          </div>
        </div>
      )}
    </div>
    <div className="text-center mt-2">
      <div className="text-lg font-bold text-white">{name}</div>
      <div className="text-sm text-white">{title}</div>
    </div>
    <div className="flex justify-center mt-2 space-x-2">
      <a href="#" className="text-white hover:text-gray-300">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-gray-200 hover:text-gray-300">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-gray-200 hover:text-gray-300">
        <i className="fab fa-google-plus"></i>
      </a>
      <a href="#" className="text-gray-200 hover:text-gray-300">
        <i className="fab fa-pinterest"></i>
      </a>
    </div>
  </div>
);

const chefs = [
  { name: 'Masum Rana', title: 'Chef', hover: true, imgUrl: 'https://sun9-51.userapi.com/impg/lb7mex6Tk2DAN32u9pkGsL4oTMH2QURHbcwGsA/BqhXYosWlgg.jpg?size=626x404&quality=95&sign=42dfb74bbffc966fb22880b56f27b6e8&c_uniq_tag=RdVi-Cj1zx0KTpMSchwDLQQDIH3lKsWnSznV-wlDs6M&type=album' },
  { name: 'Muhibbur Rashid', title: 'Sous Chef', hover: true, imgUrl: 'https://avatars.mds.yandex.net/i?id=e4a67f53163063544bbfbf5cc453a58f6273b2ab-10356912-images-thumbs&n=13' },
  { name: 'Jannatul Ferdous', title: 'Pastry Chef', hover: true, imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7e4edc137038111.6203fe5e0467d.jpg' },
  { name: 'Rashed Kabir', title: 'Head Chef', hover: true, imgUrl: 'https://i.pinimg.com/originals/72/b9/3e/72b93efc9d66127ac8ed1f830ce4e4c5.jpg' },
];

const Chef = () => (
  <div className="container mx-auto p-4 mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {chefs.map((chef, index) => (
        <ChefCard key={index} {...chef} />
      ))}
    </div>
  </div>
);

export default Chef;
