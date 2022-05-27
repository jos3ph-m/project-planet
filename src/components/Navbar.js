import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// styles & images
import './Navbar.css';
import Planet from '../assets/planet.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Planet} alt="planet logo" />
          <span>Project Planet</span>
        </li>
        {!user &&
          (<li>
            <Link to="/login">Login</Link>
          </li>)(
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
          )}
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
