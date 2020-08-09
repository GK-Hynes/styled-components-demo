import React from "react";
import styled, { css } from "styled-components";
import "./App.css";

const sizes = {
  small: 640,
  medium: 768,
  large: 1024,
  extraLarge: 1280
};

const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Heading = styled.h1`
  font-size: 2rem;
  ${above.medium`
  color: blue;
  `}
`;

const Button = styled.button`
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background: indigo;
`;

const CancelButton = styled(Button)`
  background: red;
`;

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`;

const DemoComponent = ({ className }) => (
  <h2 className={className}>I'm a demo component</h2>
);

const StyledDemo = styled(DemoComponent)`
  color: red;
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <Heading>Woo, tagged template literals!</Heading>
        <StyledDemo></StyledDemo>
        <Button>Save</Button>
        <CancelButton>Cancel</CancelButton>
      </header>
    </AppWrapper>
  );
}

export default App;
