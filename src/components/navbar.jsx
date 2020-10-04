import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavtAltMarkup"
        aria-controls="navbarNavtAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavtAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link " to="/rentals">
            Rentals
          </NavLink>

          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link " to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link " to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
        </div>

        <div className="navbar-nav mx-auto">
          {user && (
            <NavLink className="nav-item nav-link " to="/profile">
              Welcome back, {user.name}
            </NavLink>
          )}
        </div>

        {user && (
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-item nav-link right" to="/logout">
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
