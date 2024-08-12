import ProjectCard from "../components/ProjectCard";
import { projectObj } from "../Constants";

const Projects = () => {
  return (
    <div className="pt-2 bg-blue-200">
      <div>
        <h1 className="text-3xl">Projects</h1>
      </div>
      <div>
        <h1 className="text-xl">Search projects by title or filter by category</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-2">
      {
        projectObj.map(()=>{
          return <ProjectCard/>
        })
      }
      </div>
    </div>
  );
};

export default Projects;
