import React from "react";
import Auth from "../../utils/auth";
import init from "../../utils/materializeInit";
import { Link } from "react-router-dom";

function Nav() {
  init();
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/login">Login / Signup</a>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav class="teal" role="navigation">
        <div class="nav-wrapper container">
          <a href="/" id="logo-container" class="brand-logo">8-Ball Trading</a>
          <ul class="right hide-on-med-and-down">
            {showNavigation()}
          </ul>
          <ul id="nav-mobile" class="sidenav">
            {showNavigation()}
          </ul>
          <a to="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    </nav>
  );
}

export default Nav;
