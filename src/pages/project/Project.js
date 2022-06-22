import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';

// styles
import './Project.css';

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return
  }

  return <div>Project details</div>;
}
