import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <img className="mm-logo" src="./images/logo-MM.jpg" alt="math-magicians-logo" />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><NavLink to="/Calculator">Calculator</NavLink></li>
      <li><NavLink to="/Quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
