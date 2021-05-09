import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import routes from './routes'

class App extends Component {
  showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />)
      });
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <Router>
        <Header />
        {this.showContentMenu(routes)}
        <Footer />
      </Router>
    )
  }
}

export default App;

