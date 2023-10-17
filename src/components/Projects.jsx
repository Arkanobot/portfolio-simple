import projects from "../data/projects.json";
function Projects() {
  return (
    <div className="min-h-[80vh] bg-[#eef0f0] dark:bg-[#0d1117] p-5 dark:text-[#fafbfc]">
      <div className="flex flex-col flex-wrap justify-between gap-2">
        <div>
          <h1 className="text-4xl font-bold mb-10">Projects</h1>
        </div>
        {projects.projects.map((item) => {
          return (
            <div className="flex flex-col flex-wrap p-[3vw]" key={item.name}>
              <div className={`flex ${item.style} flex-wrap`}>
                <div className="lg:w-[40vw] mx-2 my-2">
                  <a href={`${item.link}`}>
                    <img
                      src={item.image}
                      alt="A Simple Sign up Webpage"
                      className="w-[70%] rounded-lg"
                    />
                  </a>
                </div>
                <div className="flex flex-col flex-wrap lg:w-[50vw]">
                  <h1 className="text-3xl font-bold mr-5 block my-2">
                    {item.title}
                  </h1>
                  <h3 className="text-2xl my-2">{item.stack}</h3>
                  <p className="my-2">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
