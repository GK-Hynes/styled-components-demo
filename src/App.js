import React from "react";
import styled from "styled-components";
import "./App.css";

const Heading = styled.h1`
  font-size: 2rem;
`;

const accentColor = `aqua`;

const Button = styled.button`
  color: ${accentColor};
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background: ${({ type }) => (type === `cancel` ? `red` : `blue`)};
`;

const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: aqua;
    }
  }
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <Heading>Woo, tagged template literals!</Heading>
        <Button>Save</Button>
        <Button type="cancel">Cancel</Button>
      </header>
    </AppWrapper>
  );
}

export default App;
