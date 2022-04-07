import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { Form, FormInput, FormLabel, FormLabelInput, DivForm, ErrorP, ErrorDiv } from '../StyledComponents/Form-style';
import { ContentDiv2, SignUpSpacingDiv } from '../StyledComponents/Content-style';
import { ButtonTwo } from '../StyledComponents/Button-style';
import { CommentsDiv } from '../StyledComponents/Video-style';


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profileImg, setProfileImg] = useState('')
  const [backgroundImg, setBackgroundImg] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateProfileImg = (e) => {
    setProfileImg(e.target.value);
  }

  const updateBackgroundImg = (e) => {
    setBackgroundImg(e.target.value);
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords must match!");
    } 

    let profileImgUrl =
      profileImg === ""
        ? "https://static.vecteezy.com/system/resources/previews/000/573/503/original/vector-sign-of-user-icon.jpg"
        : profileImg;

    let backgroundImgUrl =
      backgroundImg === ""
        ? "https://cdn.wallpapersafari.com/42/2/a5Qkju.jpeg"
        : backgroundImg
    
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, profileImgUrl, backgroundImgUrl));
      if (data) {
        setErrors(data)
      }
    }

  };
  
  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <ContentDiv2>
      <SignUpSpacingDiv/>
      <DivForm>
        <Form onSubmit={onSignUp}>
          <ErrorDiv>
            {errors.map((error, ind) => (
              <ErrorP key={ind}>{error}</ErrorP>
            ))}
          </ErrorDiv>
          <FormLabelInput>
            <FormLabel>User Name</FormLabel>
            <FormInput
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              required={true}
            ></FormInput>
          </FormLabelInput>
          <FormLabelInput>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              onChange={updateEmail}
              value={email}
              required={true}
            ></FormInput>
          </FormLabelInput>
          <FormLabelInput>
            <FormLabel>Profile Image URl</FormLabel>
            <FormInput
              type="text"
              name="profileImg"
              onChange={updateProfileImg}
              value={profileImg}
            ></FormInput>
          </FormLabelInput>
          <FormLabelInput>
            <FormLabel>Background Image URl</FormLabel>
            <FormInput
              type="text"
              name="backgroundImg"
              onChange={updateBackgroundImg}
              value={backgroundImg}
            ></FormInput>
          </FormLabelInput>
          <FormLabelInput>
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              required={true}
            ></FormInput>
          </FormLabelInput>
          <FormLabelInput>
            <FormLabel>Repeat Password</FormLabel>
            <FormInput
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></FormInput>
          </FormLabelInput>
          <ButtonTwo type="submit">Sign Up</ButtonTwo>
        </Form>
      </DivForm>
    </ContentDiv2>
  );
};

export default SignUpForm;
