import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('projects');
  const [currentFilter, setCurrentFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents.filter((document) => {
    switch (currentFilter) {
      case 'all':
        return true;
      case 'mine':
        let assignedToMe = false;
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true;
          }
        });
        return assignedToMe;
      case 'development':
        return;
      case 'design':
      case 'sales':
      case 'marketing':
    }
  });

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={projects} />}
    </div>
  );
}
