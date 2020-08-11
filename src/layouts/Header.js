import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const Header = ({ className }) => (
  <header className={className}>
    <img className="logo" src={logo} alt="React logo" />
  </header>
);

export default styled(Header)`
  background: #524763;
  padding: 0.75rem;
  .logo {
    width: 40px;
  }
`;
