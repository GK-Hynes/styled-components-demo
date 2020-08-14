import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { purple, elevation, fixed, serif } from "../utilities";

const Header = ({ className }) => (
  <header className={className}>
    <img className="logo" src={logo} alt="React logo" />
    <h1>Hello</h1>
  </header>
);

export default styled(Header)`
  background: ${purple};
  padding: 0.75rem;
  color: #fff;
  ${serif};
  ${elevation[2]};
  ${fixed({})};
  .logo {
    width: 40px;
  }
`;
