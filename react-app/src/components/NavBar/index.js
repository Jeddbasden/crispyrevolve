
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  return (
    <nav>
      <div>
        <img className="logo" src="https://logodix.com/logo/964688.jpg" />
      </div>
      <ul className="navUl">
        <div></div>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          {user && (
            <button onClick={(e) => history.push("/videos/add")}>
              Add a Video
            </button>
          )}
        </li>
        {!user && (
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
        )}
        <div></div>
        {!user && (
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>
        )}
        <div></div>
        {user && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
