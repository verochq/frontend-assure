import ProjectCard, { type PropsProject } from "./ProjectCard";

type ProjectData = PropsProject & { id: number };

type Props = {
  projectsCollection: Array<ProjectData>;
};

function Projects({ projectsCollection }: Props) {
  return (
    <div className="projects">
      {projectsCollection.map((project: ProjectData) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;
