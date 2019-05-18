import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GlobalStyle, { theme } from './theme/globalStyle';
import Feed from './pages/Feed';

const client = new ApolloClient({
  uri: 'https://metaphysics-staging.artsy.net/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <GlobalStyle />
            <Route exact path="/" component={Feed} />
          </>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
