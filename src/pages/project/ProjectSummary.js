export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        {project.assignedUsersList.map((user) => (
          <div></div>
        ))}
      </div>
    </div>
  );
}
