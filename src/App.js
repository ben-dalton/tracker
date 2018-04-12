import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './assets/styles/App.sass';
import Home, { navLinks } from './components/Home';

const eggIcon = require('./assets/images/egg.svg');

const App = () => (
  <div className="App">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={eggIcon}
              alt="egg"
              style={{ display: 'inline', marginRight: '5px', width: '20px' }}
            />
            Tracker
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {navLinks.map((link, idx) => (
          <LinkContainer to={link.path}>
            <NavItem eventKey={idx}>{link.label}</NavItem>
          </LinkContainer>
        ))}
      </Nav>
    </Navbar>
    <Route exact path="/" component={Home} />
    <Route path="/customers" render={() => <div>Customers</div>} />
    <Route path="/chickens" render={() => <div>Chickens</div>} />
    <Route path="/budget" render={() => <div>Budget</div>} />
    <Route path="/reports" render={() => <div>Reports</div>} />
  </div>
);

export default App;
