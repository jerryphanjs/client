import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import DashBoard from './components/layout/DashBoard';
import AddClient from './components/client/AddClient';
import ClientDetail from './components/client/ClientDetail';
import store from './store';
import { Provider } from 'react-redux';
import EditClient from './components/client/EditClient';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">          
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={DashBoard} />
                  <Route exact path="/client/add" component={AddClient} />
                  <Route exact path="/client/:id" component={ClientDetail} />
                  <Route exact path="/client/edit/:id" component={EditClient} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
