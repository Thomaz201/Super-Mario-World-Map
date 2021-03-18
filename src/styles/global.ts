import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #__next {
    max-width: 1080px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
    box-sizing: border-box;
    height: 100%;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1rem 'Press Start 2P', sans-serif;
  }


  button {
    cursor: pointer;
  }
`;