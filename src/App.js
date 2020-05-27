import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Menu} from "./Menu/Menu";
import { Jumbotron } from "./Jumbotron/Jumbotron";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Exo', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Ubuntu', sans-serif;
  }
`;

function App() {
  return (
      <>
    <GlobalStyle />
    <Menu/>
    <Jumbotron/>
    <div>
      <h4>Welcome to React Pizza App!!</h4>
    </div>
    </>
  );
}

export default App;
