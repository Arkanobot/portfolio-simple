import work from "../data/employment.json";
import EduAndEmpFormat from "./EducationAndEmploymentFormat";
function Employment() {
  return (
    <div className="min-h-[80vh] bg-[#eef0f0] dark:bg-[#0d1117] p-5 dark:text-[#fafbfc]">
      <div className="flex flex-col flex-wrap justify-between gap-2">
        <div>
          <h1 className="text-4xl font-bold mb-10">Employment History</h1>
        </div>
        {work.employment.map((item) => {
          return <EduAndEmpFormat details={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Employment;
