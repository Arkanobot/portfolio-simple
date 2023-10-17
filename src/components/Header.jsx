import logo from "../assets/GreenLight.gif";
import logoDark from "../assets/GreenDark.gif";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="sticky top-0">
      <div className="px-10 bg-[#fafbfc] dark:bg-[#010409] py-3 border-1 shadow-md flex justify-between flex-wrap">
        <Link to="/">
          <div className="flex gap-3 flex-wrap transition duration-100 hover:scale-110">
            <div className="max-h-[31px] max-w-[31px] self-center md:self-end">
              <picture>
                <source
                  srcSet={logoDark}
                  media="(prefers-color-scheme: dark)"
                />
                <img src={logo} alt="Available for Hire" />
              </picture>
            </div>
            <h1 className="font-bold text-2xl dark:text-[#fafbfc]">
              Shreyas Bhat K.
            </h1>
            <h2 className="dark:text-[#fafbfc] self-end mx-[14vw] sm:mx-0">
              Full Stack Dev
            </h2>
          </div>
        </Link>
        <div className={`w-full ${isMobile ? "" : "hidden"}`}>
          <button
            className="navbar-burger flex items-center text-blue-600 p-3 mx-auto"
            onClick={() => setHamburger(!hamburger)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path
                d="M
              0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              ></path>
            </svg>
          </button>
        </div>

        <div className={`flex dark:text-[#fafbfc] self-end md:text-lg `}>
          <ul
            className={`md:gap-1 flex-row flex-wrap w-full justify-center ${
              isMobile ? (hamburger ? "flex" : "hidden") : "flex"
            } `}
          >
            <li className="px-2 md:px-4 md:border-r-2 border-solid dark:border-white border-black transition duration-100 hover:scale-110">
              <Link to="Projects">Projects</Link>
            </li>
            <li className="px-2 md:px-4 md:border-r-2 border-solid dark:border-white border-black transition duration-100 hover:scale-110">
              <Link to="Employment">Employment</Link>
            </li>
            <li className="px-2 md:pl-4 transition duration-100 hover:scale-110">
              <Link to="Education">Education</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
