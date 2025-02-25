import React, { useState } from "react";
import './FoodItem.css'
// import rating_star from "../../images/star.png"

function FoodItem({id,name,price,description,image}) {
const [itemCount,setITemCount] = useState(0)


  return <div className="food-item">
    <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        
    </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
      
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
    </div>
  </div>;
}

export default FoodItem;
