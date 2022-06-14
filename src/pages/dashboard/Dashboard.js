import { useCollection } from '../../hooks/useCollection';

// styles
import './Dashboard.css';

export default function Dashboard() {
  const { documents, error } = useCollection('projects');
  return <div>Dashboard</div>;
}
