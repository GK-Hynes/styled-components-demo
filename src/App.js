import React from "react";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button } from "./elements";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Button>Login</Button>
      <Button modifiers={["small", "cancel"]}>Cancel</Button>
    </div>
  );
}

export default App;
