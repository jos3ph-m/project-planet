import { Link } from 'react-router-dom';

// styles
import './ProjectList.css';

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No projects yet.</p>}
      {projects.map((project) => (
        <Link to={`/projects${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
        </Link>
      ))}
    </div>
  );
}
