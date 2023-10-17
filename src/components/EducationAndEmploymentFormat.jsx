function EduAndEmpFormat({ details, key }) {
  return (
    <div className="flex flex-col flex-wrap p-[1vw]" key={key}>
      <div className="flex flex-row flex-wrap">
        <div className="lg:w-[40vw]">
          <h1 className="text-4xl font-bold flex justify-center my-5 lg:my-0">
            {details?.year}
          </h1>
        </div>
        <div className="flex flex-col flex-wrap lg:w-[50vw]">
          <h1
            className="text-xl md:text-3xl font-bold mr-5 block my-2"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {details?.title}
          </h1>
          <h3 className="text-lg md:text-2xl my-2">{details?.institution}</h3>
          <p className="my-2">{details?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EduAndEmpFormat;
