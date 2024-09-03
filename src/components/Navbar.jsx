import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logoFull.svg";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header>
      <nav className="flex h-[70px] items-center justify-between max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 font-gehili">
        <div className="w-44 logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-between hidden gap-4 xl:gap-8 md:flex">
          <ul className="flex items-center justify-between gap-4 text-[1rem] xl:gap-8 xl:text-lg text-primary-color">
            <Link to="/">
              <li className="transition-default duration-default hover:text-third-color">
                الرئيسية
              </li>
            </Link>
            <Link to="/about">
              <li className="transition-default duration-default hover:text-third-color">
                عن الدكتور
              </li>
            </Link>
            <Link to="/cases">
              <li className="transition-default duration-default hover:text-third-color">
                قصص نجاح
              </li>
            </Link>
            <Link to="/book">
              <li className="transition-default duration-default hover:text-third-color">
                احجز موعد
              </li>
            </Link>
            <Link to="/contact">
              <li className="transition-default duration-default hover:text-third-color">
                تواصل معنا
              </li>
            </Link>
          </ul>
          {isAuthenticated ? (
            <div className="relative inline-block">
              <img
                src="https://readymadeui.com/team-6.webp"
                className="w-10 h-10 border rounded-full border-primary-color"
              />
              {/* <span className="absolute right-0 block w-3 h-3 bg-green-500 border border-white rounded-full bottom-1"></span> */}
            </div>
          ) : (
            <button
              className="px-4 text-[1rem] xl:text-lg py-[6px] text-white rounded-sm bg-primary-color transition-default duration-default hover:bg-secondary-color"
              onClick={() => navigate("/login")}
            >
              تسجيل الدخول
            </button>
          )}
        </div>
        <div className="z-10 md:hidden" onClick={handleClick}>
          {nav ? (
            <FaTimes size={25} color="#eee" />
          ) : (
            <RxHamburgerMenu size={25} color="#007785" />
          )}
        </div>
        {/* Mobile Menu */}
        <ul
          className={`${
            nav
              ? "text-white opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-y-full"
          } transition-default gap-4 text-white duration-default absolute top-0 left-0 w-full h-screen bg-primary-color bg-opacity-90 flex flex-col justify-center items-center text-2xl`}
          onClick={() => setNav(false)}
        >
          <Link to="/">
            <li className="transition-default duration-default hover:text-black">
              الرئيسية
            </li>
          </Link>
          <Link to="/about">
            <li className="transition-default duration-default hover:text-black">
              عن الدكتور
            </li>
          </Link>
          <Link to="/cases">
            <li className="transition-default duration-default hover:text-black">
              قصص نجاح
            </li>
          </Link>
          <Link to="/book">
            <li className="transition-default duration-default hover:text-black">
              احجز موعد
            </li>
          </Link>
          <Link to="/contact">
            <li className="transition-default duration-default hover:text-black">
              تواصل معنا
            </li>
          </Link>
          <button
            className="px-4 text-[1rem] xl:text-lg py-[6px] text-white rounded-sm bg-secondary-color transition-default duration-default hover:bg-white hover:text-primary-color"
            onClick={() => navigate("/login")}
          >
            تسجيل الدخول
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
