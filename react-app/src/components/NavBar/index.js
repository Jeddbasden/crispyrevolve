
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';


import LogoutButton from '../auth/LogoutButton';
import { logout } from '../../store/session';
import LoginFormModal from '../auth/LoginFormModal';
import SignupFormModal from '../auth/SignUpFormModal';
import AddVideoPageModal from '../AddVideoPage/AddVideoPageModal';

import { Button, ProfileButtonBtn } from '../StyledComponents/Button-style'
import { Title, TitleDiv } from '../StyledComponents/title-style';
import { NavLi } from '../StyledComponents/Nav-style';

import logo from '../../assets/logo.jpg'
import './NavBar.css'

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
            <AddVideoPageModal />
          )}
        </NavLi>

        {!user && (
          <NavLi>
            <LoginFormModal/>
          </NavLi>
        )}

        {!user && (
          <NavLi>
            <SignupFormModal />
          </NavLi>
        )}

        {user && (
          <NavLi>
            <NavLink to={`users/${user.id}`} exact={true}>
              <i className="fa-duotone fa-user-astronaut fa-lg"></i>
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
