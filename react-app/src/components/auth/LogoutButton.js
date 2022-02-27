import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { Button } from '../StyledComponents/Button-style';
import { NavLink, useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push("/")
  };

  return (
    <div>
      <i className="fa-solid fa-arrow-right-from-bracket" onClick={onLogout}></i>
    </div>
  );
};

export default LogoutButton;
