import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import { BiRestaurant } from "react-icons/bi";
import Buttons from "../../layouts/Buttons";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const handleChange = () => setmenu(!menu);
  const closeMenu = () => setmenu(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">

      <div className="flex flex-row justify-between p-5 px-5 bg-[#1b1b1b] text-white shadow-md">
        <div className="flex flex-row items-center cursor-pointer">
          <BiRestaurant size={32} />
          <h1 className="text-xl font-semibold">FoodieWeb</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-orange-300 border-b-2 border-orange-500"
                : "cursor-pointer hover:text-orange-400 transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dishes"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-orange-300 border-b-2 border-orange-500"
                : "cursor-pointer  hover:text-orange-400 transition-all"
            }
          >
            Dishes
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-orange-300 border-b-2 border-orange-500"
                : "cursor-pointer  hover:text-orange-400 transition-all"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-orange-300 border-b-2 border-orange-500"
                : "cursor-pointer hover:text-orange-400 transition-all"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-orange-300 border-b-2 border-orange-500"
                : "cursor-pointer  hover:text-orange-400 transition-all"
            }
          >
            Reviews
          </NavLink>
          <Buttons title="Login" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuFold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-all ease-in-out duration-500 z-50`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer  text-orange-300 border-b-2 border-orange-500"
              : "cursor-pointer hover:text-orange-300 transition-all"
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/dishes"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer text-orange-300 border-b-2 border-orange-500"
              : "cursor-pointer  hover:text-orange-400 transition-all"
          }
          onClick={closeMenu}
        >
          Dishes
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer  text-orange-300 border-b-2 border-orange-500"
              : "cursor-pointer  hover:text-orange-400 transition-all"
          }
          onClick={closeMenu}
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer  text-orange-300 border-b-2 border-orange-500"
              : "cursor-pointer  hover:text-orange-400 transition-all"
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer  text-orange-300 border-b-2 border-orange-500"
              : "cursor-pointer hover:text-orange-300 transition-all"
          }
          onClick={closeMenu}
        >
          Reviews
        </NavLink>
        <Buttons title="Login" />
      </div>
    </div>
  );
}

export default Navbar;
