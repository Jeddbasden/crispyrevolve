import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FooterDiv } from "./StyledComponents/Footer-style";
import "./footer.css"

const Footer = () => {
  const history = useHistory()
  return (
    <FooterDiv>
      <a className="link" href='https://github.com/Jeddbasden/crispyrevolve'>
        <i className="fab fa-github-square fa-3x"></i>
      </a>
      <a className="link" href='https://www.linkedin.com/in/jedd-basden-080149155/'>
        <i className="fab fa-linkedin fa-3x"></i>
      </a>
    </FooterDiv>
  );
}

export default Footer;
