export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date"></p>
      </div>
    </div>
  );
}
