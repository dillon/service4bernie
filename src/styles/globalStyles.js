import * as fonts from './fonts';
import * as colors from './colors';

export default `
  ${fonts.Inter}
  ${fonts.InterFont}
  ${fonts.InterMediumFont}
  ${fonts.InterSemiBoldFont}
  ${fonts.InterBoldFont}

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-display: block;
    overflow-x: hidden;
  }

  body {
    background ${colors.blue};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.5rem;
    font-family: 'Times New Roman', Times, serif;
    color: white;
  }

  h1, h2, h3, h4, h5, h6, .sans-serif {
    letter-spacing: -0.03em;
    font-family: Inter, Helvetica, Arial, sans-serif;
    font-weight: 700;
  }

  ::-moz-selection { 
    background: ${colors.red}; 
  }
  ::selection { 
    background: ${colors.red}; 
  }
    
  li {
    margin: 1em 0;
  }

`;
