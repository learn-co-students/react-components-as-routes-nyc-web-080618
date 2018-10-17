import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'

/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;

const Home = () => <h1>Home!</h1>;


// Highlighting the 3 ways to do this:
// Home is rendered below as a function that's been declared above
// About is rendered below inline as a prop
// Login is rendered below as a Class Component

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={() => <h1>This is my about component!</h1>} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
