import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/projects/create">
          <li>Create</li>
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
