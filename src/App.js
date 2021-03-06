import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth'; 

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import DashBoard from './components/layout/DashBoard';
import AddClient from './components/client/AddClient';
import ClientDetail from './components/client/ClientDetail';
import store from './store';
import { Provider } from 'react-redux';
import EditClient from './components/client/EditClient';
import Login from './components/auth/Login';
import Settings from './components/settings/Settings';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">          
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={ UserIsAuthenticated(DashBoard)} />
                  <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
                  <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetail)} />
                  <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
                  <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
                  <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />
                  <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
                </Switch>
              </div>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
