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
        <li></li>
      </ul>
    </div>
  );
}
