import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
