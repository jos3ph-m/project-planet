import { NavLink } from 'react-router-dom';

// styles & images
import './Sidebar.css';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* avatar and username here later */}
          <p>Hi end user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/"></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
