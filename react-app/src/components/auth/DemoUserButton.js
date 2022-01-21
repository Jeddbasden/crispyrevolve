import React from "react";
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const DemoUserButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory()
  const loginDemo = async () => {
    await dispatch(login("demo@aa.io", "password"));
  }

  if (user) history.push('/')
  
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        loginDemo();
      }}
    >Demo User</button>
  )
}

export default DemoUserButton;
