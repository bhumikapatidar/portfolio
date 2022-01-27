import ProjectDetails from "../components/ProjectDetails";
import { project } from "../data";

const projects = () => {
  return (
    <div className="p-4 overflow-y-scroll" style={{height:'80vh',}}>
      <div className="my-3 space-y-14">
        {
          project.map(p => (
            <div key={p.name} className="py-8">
              <ProjectDetails proj={p} />
              </div>
          ))
        }
      </div>
    </div>
  )

};

export default projects;
