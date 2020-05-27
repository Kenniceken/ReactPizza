import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Exo', sans-serif;
    font-weight: 300;
  }
  h1, h2, h3 {
    font-family: 'Ubuntu', sans-serif;
  }
`;

function App() {
  return (
      <>
    <h1>React Pizza</h1>
    <GlobalStyle />
    <div>
      <h4>Welcome to React Pizza App!!</h4>
    </div>
    </>
  );
}

export default App;
