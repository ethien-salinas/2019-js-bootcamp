import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './sass/styles.scss'
import App from './view/App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVER
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
