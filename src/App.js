import React from "react";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button, Card } from "./elements";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Button>Login</Button>
        <Button modifiers={["small", "cancel"]}>Cancel</Button>
        <Card>
          <h2>Card Heading</h2>
          <Card.Button>Click here</Card.Button>
        </Card>
      </main>
    </div>
  );
}

export default App;
