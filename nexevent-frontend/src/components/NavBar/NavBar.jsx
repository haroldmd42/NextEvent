import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
     <nav className="navbar navbar-expand-lg sticky-top navbar-arkd ">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Logo"  className="navbar-logo me-1"/>  
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
