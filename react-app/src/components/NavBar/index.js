
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { Button } from '../StyledComponents/Button-style'
import logo from '../../assets/logo.jpg'
import { Title, TitleDiv } from '../StyledComponents/title-style';
import { NavLi } from '../StyledComponents/Nav-style';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  return (
    <nav>
      <TitleDiv onClick={() => history.push("/")}>
        <img
          className="logo"
          src={logo}
        />
        <Title>CrispyRevolve</Title>
      </TitleDiv>
      <ul className="navUl">
        <NavLi>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </NavLi>
        <NavLi>
          {user && (
            <Button onClick={(e) => history.push("/videos/add")}>
              Add Video
            </Button>
          )}
        </NavLi>
        {!user && (
          <NavLi>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </NavLi>
        )}
        {!user && (
          <NavLi>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </NavLi>
        )}
        {user && (
          <NavLi>
            <LogoutButton />
          </NavLi>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
