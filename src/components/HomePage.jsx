import profilePic from "../assets/profilePic.jpg";
function HomePage() {
  return (
    <div className="bg-[#eef0f0] dark:bg-[#0d1117] dark:text-[#fafbfc] min-h-[80vh] px-5 flex justify-center place-items-center flex-wrap">
      <div className="max-h-[50h] max-w-[50vh] overflow-hidden rounded-full">
        <img src={profilePic} alt="My profile pic" />
      </div>
      <div className="self-center m-10">
        <h1 className="text-[13vh] font-bold self-start ">Hello</h1>
        <h2 className="text-xl font-bold self-center">Bit about me :</h2>
        <div className="lg:w-[30vw]">
          <p className="max-w-10vw overflow-auto self-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            reiciendis magni perspiciatis, quo ex obcaecati, possimus, similique
            commodi tempora maiores consequatur incidunt
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
