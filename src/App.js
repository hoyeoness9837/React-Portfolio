import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'
        style={{ backgroundColor: 'red' }}>
          <Link to='/'>Main</Link>
          <Link to='/aboutme'>About Me</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/aboutme'>
            <AboutMe />
          </Route>
          <Route path='/projects'>
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
