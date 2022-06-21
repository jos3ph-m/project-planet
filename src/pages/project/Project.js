import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';

// styles
import './Project.css';

export default function Project() {
  const { id } = useParams();
  return <div>Project details</div>;
}
