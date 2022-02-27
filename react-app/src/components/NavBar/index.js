
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';


import LogoutButton from '../auth/LogoutButton';
import { logout } from '../../store/session';

import { Button, ProfileButtonBtn } from '../StyledComponents/Button-style'
import { Title, TitleDiv } from '../StyledComponents/title-style';
import { NavLi } from '../StyledComponents/Nav-style';

import logo from '../../assets/logo.jpg'
import './NavBar.css'
// import ProfileButton from '../auth/ProfileButton';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push("/");
  };

  return (
    <nav>
      <TitleDiv onClick={() => history.push("/")}>
        <img className="logo" src={logo} />
        <Title>CrispyRevolve</Title>
      </TitleDiv>
      <ul className="navUl">
        <NavLi>
          <NavLink to="/" exact={true} activeClassName="active">
            <i className="fas fa-home"></i>
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
            <NavLink to="/login" exact={true} className="auth">
              <i className="fas fa-sign-in-alt"></i>
            </NavLink>
          </NavLi>
        )}

        {!user && (
          <NavLi>
            <NavLink to="/sign-up" exact={true} className="auth">
              <i className="fas fa-user-plus"></i>
            </NavLink>
          </NavLi>
        )}

        {/* {user && (
          <NavLi>
            <NavLink to={`users/${user.id}`} exact={true}>
              <i className="fa-duotone fa-user-astronaut fa-lg"></i>
            </NavLink>
          </NavLi>
        )} */}

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
