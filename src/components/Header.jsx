import logo from "../assets/GreenLight.gif";
import logoDark from "../assets/GreenDark.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="">
      <div className="px-10 dark:bg-[#010409] py-3 border-1 shadow-md flex justify-between flex-wrap">
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
            <h2 className="dark:text-[#fafbfc] self-end mx-[20vw] md:mx-0">
              Full Stack Dev
            </h2>
          </div>
        </Link>

        <div className="flex dark:text-[#fafbfc] self-end text-lg">
          <ul className="flex gap-1 flex-wrap">
            <li className="px-4 border-r-2 border-solid dark:border-white border-black transition duration-100 hover:scale-110">
              <Link to="Resume">Resume</Link>
            </li>

            <li className="px-4 border-r-2 border-solid dark:border-white border-black transition duration-100 hover:scale-110">
              <Link to="Projects">Projects</Link>
            </li>
            <li className="pl-4 transition duration-100 hover:scale-110">
              <Link to="ContactMe">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
