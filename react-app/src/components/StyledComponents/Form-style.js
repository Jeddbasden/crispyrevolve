import styled from "styled-components";

export const Form = styled.form`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;
  background: linear-gradient(to bottom right, #5960e4, #1e3896);
`;

export const FormInput = styled.input`
  display: block;
  border-radius: 8px;
  height: 25px;
  width: 250px;
  box-shadow: -5px 5px rgba(0, 0, 0, 0.142);
`;

export const FormLabel = styled.label`
  width: 100%;
  position: relative;
  text-align: center;
  padding: 15px;
  font-size: 20px;
`;

export const FormLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivForm = styled.div`
  height: 800px;
`
