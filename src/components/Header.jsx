import logo from "../assets/GreenLight.gif";
import logoDark from "../assets/GreenDark.gif";

function Header() {
  return (
    <nav className="">
      <div className="px-10 dark:bg-[#010409] py-3 border-1 shadow-md flex justify-between flex-wrap">
        <div className="flex gap-3">
          <div className="max-h-[31px] max-w-[31px] self-end">
            <picture>
              <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
              <img src={logo} alt="Available for Hire" />
            </picture>
          </div>
          <h1 className="font-bold text-2xl dark:text-[#fafbfc]">
            Shreyas Bhat K.
          </h1>
          <h2 className="dark:text-[#fafbfc] self-end">Full Stack Dev</h2>
        </div>
        <div className="flex dark:text-[#fafbfc] self-end text-lg">
          <ul className="flex gap-1">
            <li className="px-4 border-r-2 border-solid dark:border-white border-black">
              Resume
            </li>
            <li className="px-4 border-r-2 border-solid dark:border-white border-black">
              Projects
            </li>
            <li className="px-4">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
