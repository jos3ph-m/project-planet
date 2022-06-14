import { useCollection } from '../../hooks/useCollection';

// styles
import './Dashboard.css';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');
  return (
    <div>
      <h2 className="page-title"></h2>
    </div>
  );
}
