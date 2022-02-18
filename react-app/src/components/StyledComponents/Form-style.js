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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
export const CommentForm = styled.form`
  width: auto;
  padding: 0px 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  background: linear-gradient(to bottom right, #5960e4, #1e3896);
`;

export const ErrorP = styled.p`
  color: #2187ff;
  font-family: "Catamaran", sans-serif;
  font-size: 15px;
  font-weight: 600;
`;

export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`
