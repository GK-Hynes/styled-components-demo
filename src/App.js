import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { Button, Card } from "./elements";

const theme = {
  colors: {
    primary: "#e54b4b",
    secondary: "#dbde61"
  },
  fontSizes: {
    large: "2rem"
  }
};

const themeTwo = {
  colors: {
    primary: "#524763",
    secondary: "#82D8D8"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <main>
          <Button>Login</Button>
          <Button modifiers={["small", "cancel"]}>Cancel</Button>
          <ThemeProvider theme={themeTwo}>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button>Click here</Card.Button>
            </Card>
          </ThemeProvider>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
