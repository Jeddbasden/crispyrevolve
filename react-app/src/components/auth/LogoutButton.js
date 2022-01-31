import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { Button } from '../StyledComponents/Button-style';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push("/")
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
