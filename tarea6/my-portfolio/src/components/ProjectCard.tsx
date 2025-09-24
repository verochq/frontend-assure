export type PropsProject = {
  title: string;
  description: string;
  link: string;
};

function ProjectCard({ title, description, link }: PropsProject) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>See it!</a>
    </div>
  );
}

export default ProjectCard;
