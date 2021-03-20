import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #__next {
    background-image: url("/mariopattern.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    
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
    

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1rem 'Press Start 2P', sans-serif;
  }


  button {
    cursor: pointer;
  }
`;