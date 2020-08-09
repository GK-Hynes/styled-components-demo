import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Global";
import { Heading, Button, CancelButton } from "./elements";

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
      <GlobalStyle />
      <header className="App-header">
        <Heading>Woo, tagged template literals!</Heading>
        <StyledDemo />
        <Button>Save</Button>
        <CancelButton top="0">Cancel</CancelButton>
      </header>
    </AppWrapper>
  );
}

export default App;
