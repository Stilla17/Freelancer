import React, { useState } from "react";
import img from "../../assets/icons/UPTECHUNT.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import search from "./../../assets/icons/search.svg";
import { Link } from "react-router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between pt-[30px] pb-[17px] px-4 relative">
      <Link to="/">
        <img src={img} alt="logo" />
      </Link>

      <ul className="flex max-md:hidden gap-[45px]">
        <li>
          <a href="">Find Talent</a>
        </li>
        <li>
          <a href="">Find Work</a>
        </li>
        <li>
          <a href="">Why UpTechhunt</a>
        </li>
      </ul>

      <div className="relative">
        <input
          className="border-black border-2 w-[300px] rounded-3xl pl-5 py-[3px] max-md:hidden"
          type="text"
          placeholder="Search"
        />
        <img className="absolute top-[7px] right-[7px] " src={search} alt="" />
      </div>

      <div className="flex max-md:hidden gap-4">
        <Link
          to={"/login"}
          id="firstlu"
          className="py-[12px] rounded-3xl px-[36px] bg-white"
        >
          Log in
        </Link>
        <Link
          to={"/signup"}
          id="firstlu"
          className="py-[12px] rounded-3xl px-[36px] bg-white"
        >
          Sign in
        </Link>
      </div>

      <button
        className="hidden max-md:block  text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RxHamburgerMenu />
      </button>

      <div
        className={`fixed top-0 right-0 h-full px-6 w-2/3 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </button>

        <ul className="flex flex-col items-start gap-6 mt-20 ">
          <li>
            <a href="">Find Talent</a>
          </li>
          <li>
            <a href="">Find Work</a>
          </li>
          <li>
            <a href="">Why UpTechhunt</a>
          </li>
          <li>
            <Link
              to={"/login"}
              className="py-2 px-6 bg-gray-200 rounded-2xl w-full"
            >
              Log in
            </Link>
          </li>
          <li>
            <Link
              to={"/signup"}
              className="py-2 px-6 bg-gray-200 rounded-2xl w-full"
            >
              Sign in
            </Link>
          </li>
        </ul>

        <input
          className="border-black border-2 max-w-[300px] rounded-3xl pl-5 py-[3px] mt-6 max-md:block"
          type="text"
          placeholder="Search"
        />
      </div>

      {
        isOpen && (
          <div
            className="fixed inset-0 bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )
      }
    </nav >
  );
};

export default Nav;
