export type PropsProject = {
  title: string;
  description: string;
  link: string;
};

function ProjectCard({ title, description, link }: PropsProject) {
  return (
    <div className="ProjectCard">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Link</a>
    </div>
  );
}

export default ProjectCard;
