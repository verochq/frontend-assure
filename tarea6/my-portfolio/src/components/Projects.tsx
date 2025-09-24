import ProjectCard, { type PropsProject } from "./ProjectCard";

export type ProjectData = PropsProject & { id: number };

type Props = {
  projectsCollection: Array<ProjectData>;
};


function Projects({ projectsCollection }: Props) {
  return (
    <div className="projects">
      {projectsCollection.length ? projectsCollection.map((project: ProjectData) => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      )) : "No projects to show yet!"
    }
    </div>
  );
}


export default Projects;
