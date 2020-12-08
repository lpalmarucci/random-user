import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Posts from './components/Posts';
import Home from './components/Home';
import { BrowserRouter as Router , Route, Link, Switch, Redirect } from 'react-router-dom'

ReactDOM.render(
  <Router>
      <Redirect from='/' to='/dashboard' />
      <Link to={'/'} className="nav-link"> Home </Link>
      <Link to={'/dashboard'} className="nav-link"> Dashboard </Link>
      <Link to={'/posts'} className="nav-link"> Posts </Link>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path="/posts/:id" component={Posts} />
          <Route path='/posts' component={Posts} />
      </Switch>
   </Router>,
  document.getElementById('root')
);


