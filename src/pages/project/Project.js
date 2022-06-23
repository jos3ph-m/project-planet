import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';

// styles
import './Project.css';
import ProjectSummary from './ProjectSummary';

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  // if we have an error return the error
  if (error) {
    return <div className="error">{error}</div>;
  }

  // No error and no document return Loading...
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  // finally no error and the document exists, return the document name
  return (
    <div className="project-details">
      <ProjectSummary />
    </div>
  );
}
