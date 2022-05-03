import { Link } from 'react-router-dom';

// styles & images
import './Navbar.css';
import Planet from '../assets/planet.svg';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li className="logo">
          <img src={Planet} alt="planet logo" />
          <span>Project Planet</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="signup">Sign Up</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
