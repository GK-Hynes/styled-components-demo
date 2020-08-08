import React from "react";
import styled from "styled-components";
import "./App.css";

const Heading = styled.h1`
  font-size: 2rem;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading>Woo, tagged template literals!</Heading>
      </header>
    </div>
  );
}

export default App;
