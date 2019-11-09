import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routeConfig from './router/router-config';
import './App.less';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {routeConfig.map((route, index) => (
            <Route
              exact={route.exact}
              key={index}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Router>
      </header>
    </div>
  );
};

// eslint-disable-next-line no-undef
export default hot(module)(App);
