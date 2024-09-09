import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logoFull.svg";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@store/authSlice";
import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [drop, setDrop] = useState(false);
  const handleDropdown = () => {
    setDrop(!drop);
  };

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="relative">
            {isAuthenticated ? (
              <>
                <button
                  className="relative inline-block"
                  onClick={handleDropdown}
                >
                  <img
                    src="https://readymadeui.com/team-6.webp"
                    className="w-10 h-10 border rounded-full hover:border-2 border-primary-color"
                  />
                  {/* <span className="absolute right-0 block w-3 h-3 bg-green-500 border border-white rounded-full bottom-1"></span> */}
                </button>
                {drop && (
                  <ul
                    ref={dropdownRef}
                    className="absolute block shadow-lg left-3 bg-slate-50 py-2 z-[1000] min-w-[200px] w-max rounded max-h-96 overflow-auto"
                  >
                    <Link
                      to="/profile"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <li className="flex items-center px-6 py-3 text-sm cursor-pointer text-primary-color hover:bg-primary-color-25">
                        <FaUser className="inline mx-2" />
                        الحساب الشخصي
                      </li>
                    </Link>
                    <Link to="/logout" onClick={handleLogout}>
                      <li className="flex items-center px-6 py-3 text-sm cursor-pointer text-primary-color hover:bg-primary-color-25">
                        <TbLogout className="inline mx-2" />
                        تسجيل الخروج
                      </li>
                    </Link>
                  </ul>
                )}
              </>
            ) : (
              <button
                className="px-4 text-[1rem] xl:text-lg py-[6px] text-white rounded-sm bg-primary-color transition-default duration-default hover:bg-secondary-color"
                onClick={() => navigate("/login")}
              >
                تسجيل الدخول
              </button>
            )}
          </div>
        </div>
        <div className="z-50 md:hidden" onClick={handleClick}>
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
              ? "text-white opacity-100 transform translate-x-0 z-40"
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
          {isAuthenticated ? (
            <>
              <button
                className="px-4 text-[1rem] xl:text-lg py-[6px] text-black rounded-sm bg-slate-300 transition-default duration-default hover:bg-white hover:text-primary-color"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                الحساب الشخصي
              </button>
              <button
                className="px-6 text-[1rem] xl:text-lg py-[6px] text-white rounded-sm bg-red-500 transition-default duration-default hover:bg-white hover:text-primary-color"
                onClick={handleLogout}
              >
                تسجيل خروج
              </button>
            </>
          ) : (
            <button
              className="px-4 text-[1rem] xl:text-lg py-[6px] text-black rounded-sm bg-slate-300 transition-default duration-default hover:bg-secondary-color"
              onClick={() => navigate("/login")}
            >
              تسجيل الدخول
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
