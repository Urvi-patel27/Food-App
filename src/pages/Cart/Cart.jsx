import React from "react";
import "./Cart.css";

function Cart() {
  const images = [
    "https://avatars.mds.yandex.net/i?id=b597820d8bc5f92614b19ab2f2a8245c101213f3-9710160-images-thumbs&n=13",
    "https://c.wallhere.com/photos/b7/5b/meat_greens_arugula_tomatoes_cherry_tomatoes-633277.jpg!d",
    "https://sun9-49.userapi.com/impg/oNoE6BAg1dXe9HE8PKcsA7X6E_Rv0ljpMI7JNg/ysbCGxuQ8po.jpg?size=1280x720&quality=95&sign=9e8b1fd1c09f1411a62d7c05203e55a1&c_uniq_tag=pu6sdBV2CNiFYObne1uYOdF7qzeLhBUU7DQUAp04yPw&type=album",
    "https://avatars.mds.yandex.net/i?id=961c126b534cc9baa4c63a6f1f7a0efa44a93d62d3462e46-12616328-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=53276819df8572ffd2dbde845db2c44b6f8421d8-4569102-images-thumbs&n=13",
    "https://s3.images-iherb.com/cms/blog-manager/10-ways-to-improve-microbiome-health-fiber.jpg",
    "https://i7.photo.2gis.com/images/branch/0/30258560085366164_abc9_656x340.jpg",
    "https://digital.ihg.com/is/image/ihg/holiday-inn-atlanta-6016108205-4x3",
  ];

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-blac">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full">
          {/* Image Items */}
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group h-[250px]"
            >
              <img
                src={src}
                alt={`Dish ${index + 1}`}
                className="w-full h-full object-cover group-hover:opacity-50 transition duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-300">
                <div className="text-center text-white p-4">
                  <h2 className="text-xl font-bold">Dish {index + 1}</h2>
                  <p className="text-sm">Category</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
