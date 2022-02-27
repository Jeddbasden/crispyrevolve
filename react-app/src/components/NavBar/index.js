
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { Button, ProfileButtonBtn } from '../StyledComponents/Button-style'
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

        {user && (
          <NavLi>
            <LogoutButton />
          </NavLi>
        )}

        {/* {user && (
          <NavLi>
            <ProfileButtonBtn onClick={() => history.push(`/users/${user.id}`)}>
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </ProfileButtonBtn>
          </NavLi>
        )} */}
      </ul>
    </nav>
  );
}

export default NavBar;
