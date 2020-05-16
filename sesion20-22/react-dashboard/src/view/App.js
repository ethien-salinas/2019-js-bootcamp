import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Books from './Books'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
    <h2>Elemento que siempre está</h2>
    </>
  );
}

export default App;
