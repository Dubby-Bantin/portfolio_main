import { projects } from "@/lib/constants";
import ProjectCard from "./project_card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center py-20 gap-3"
    >
      <h1 className="text_gradient text-xl font-bold">A small selection of recent projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-y-16 px-5 ">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
