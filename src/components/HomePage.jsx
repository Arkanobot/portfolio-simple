import profilePic from "../assets/profilePic.jpg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="bg-[#eef0f0] dark:bg-[#0d1117] dark:text-[#fafbfc] min-h-[80vh] px-5 flex justify-center place-items-center flex-wrap-reverse md:flex-wrap">
      <div className="md:my-10 max-h-[50h] max-w-[50vh] overflow-hidden rounded-full transition duration-100 hover:scale-110">
        <img src={profilePic} alt="My profile pic" />
      </div>
      <div className="self-center m-10">
        <h1 className="text-[5vh] xl:text-[13vh] font-bold self-start xl:mx-[-7px] transition duration-100 hover:scale-110">
          Hello,
        </h1>
        <h2 className="text-2xl xl:text-3xl font-bold self-center">
          Bit about me :
        </h2>
        <div className="lg:w-[30vw] my-4">
          <p className="max-w-10vw overflow-auto self-center">
            I'm a dedicated Full Stack Developer with a passion for creating
            innovative solutions in the world of technology. With expertise in
            HTML, CSS, JavaScript, TypeScript, Python, and C. Skilled in
            frameworks like React, Redux, and DBMS such as MySQL, and MongoDB,
            I've successfully delivered solutions in healthcare and e-commerce
            sectors. Proficient in AWS, Google Cloud, and Digital Ocean, I excel
            in managing complex data structures. Furthermore, my experience in
            talent acquisition has honed my organizational skills and people
            management abilities, enhancing my capacity to foster dynamic and
            collaborative team environments.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center">
          <Link to="/Projects">
            <div className="mx-2 md:mx-5 my-2 lg:mx-0 min-h-[105px] md:min-h-[160px] xl:min-h-[20vh] p-2 min-w-[105px] md:min-w-[160px] lg:min-w-[160px] xl:min-w-[20vh] dark:bg-white hover:dark:bg-[#010409] hover:dark:text-[#fafbfc] hover:border-solid hover:border hover:dark:border-white bg-[#FF914D] border border-solid border-black hover:bg-[#eef0f0] hover:border-[#FF914D] hover:text-[#FF914D] rounded-full flex place-content-center justify-center text-black transition duration-100 hover:scale-110 hover:animate-wiggle">
              <p className="self-center md:font-bold md:text-2xl">Projects</p>
            </div>
          </Link>
          <Link to="/Employment">
            <div className="mx-2 md:mx-5 my-2 min-h-[105px] md:min-h-[160px] xl:min-h-[20vh] p-2 lg:min-w-[160px] xl:min-w-[20vh] dark:bg-white hover:dark:bg-[#010409] hover:dark:text-[#fafbfc] hover:border-solid hover:border hover:dark:border-white bg-[#7ED957] border border-solid border-black hover:bg-[#eef0f0] hover:border-[#7ED957] hover:text-[#7ED957] rounded-full flex place-content-center justify-center text-black transition duration-100 hover:scale-110 hover:animate-wiggle">
              <p className="self-center md:font-bold md:text-2xl">Employment</p>
            </div>
          </Link>
          <Link to="/Education">
            <div className="mx-2 lg:mx-0 my-2 min-h-[105px] md:min-h-[160px] xl:min-h-[20vh] p-2 min-w-[105px] md:min-w-[160px] lg:min-w-[160px] xl:min-w-[20vh] dark:bg-white hover:dark:bg-[#010409] hover:dark:text-[#fafbfc] hover:border-solid hover:border hover:dark:border-white bg-[#38B6FF] border border-solid border-black hover:bg-[#eef0f0] hover:border-[#38B6FF] hover:text-[#38B6FF] rounded-full flex place-content-center justify-center text-black transition duration-100 hover:scale-110 hover:animate-wiggle">
              <p className="self-center md:font-bold md:text-2xl">Education</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
