import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle, { theme } from './theme/globalStyle';
import Feed from './pages/Feed';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <GlobalStyle />
          <Route exact path="/" component={Feed} />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
