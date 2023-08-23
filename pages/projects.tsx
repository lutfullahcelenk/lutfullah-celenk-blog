import { useState } from "react";
import ProjectCard from "../components/ProjectCard/index";
import ProjectNavbar from "../components/ProjectNavbar/index";
import { projects as projectsData } from "../constants/data";
import { Category } from "../constants/type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2">
      <ProjectNavbar active={active} handleFilterCategory={handleFilterCategory} />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 p-2 border-4 font-oswald font-semibold text-lg
             border-gray-300 bg-gray-400
             text-white rounded-lg sm:col-span-6 
             lg:col-span-4 dark:bg-gray-700 dark:hover:bg-red-700 hover:bg-red-800"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
