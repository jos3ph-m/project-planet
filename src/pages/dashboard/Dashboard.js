import { useCollection } from '../../hooks/useCollection';

// styles
import './Dashboard.css';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p>{error}</p>}
    </div>
  );
}
