import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUserButton from './DemoUserButton'
import { Form, FormInput, FormLabel, FormLabelInput, ErrorP, DivForm } from "../StyledComponents/Form-style";
import { ContentDiv } from '../StyledComponents/Content-style';
import { ButtonTwo } from '../StyledComponents/Button-style';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <ContentDiv>
      <DivForm>
        <Form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <ErrorP key={ind}>{error}</ErrorP>
            ))}
          </div>
          <FormLabelInput>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </FormLabelInput>
          <FormLabelInput>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <ButtonTwo type='submit'>Login</ButtonTwo>
          </FormLabelInput>
          <div>
            <DemoUserButton />
          </div>
        </Form>
      </DivForm>
    </ContentDiv>
  );
};

export default LoginForm;
