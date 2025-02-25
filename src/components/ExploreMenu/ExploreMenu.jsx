import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets";


function ExploreMenu({category,setCategory}) {
  return (
    <div className="explore-Menu mt-14" id="explore-menu">
      <h1 className="explore-menu-text text-5xl" >Explore our menu</h1>
      <p className="explore-menu-text mt-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quae?
        Necessitatibus odit laboriosam cumque blanditiis eum veritatis, enim
        aspernatur a corporis, quasi illo aut fuga? Illum exercitationem
        excepturi maxime ducimus.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
      
            return(
                <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}   key={index} className="explore-menu-list-item">
                    <img  className={category===item.menu_name?"active":""}   src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                </div>
            )
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
