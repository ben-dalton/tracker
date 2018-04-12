import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/App.sass';

import Home from './Home';

const eggIcon = require('../assets/images/egg.svg');

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
        <LinkContainer to="customers">
          <NavItem eventKey={1}>Customers</NavItem>
        </LinkContainer>
        <LinkContainer to="chickens">
          <NavItem eventKey={4}>Chickens</NavItem>
        </LinkContainer>
        <LinkContainer to="budget">
          <NavItem eventKey={2}>Budget</NavItem>
        </LinkContainer>
        <LinkContainer to="reports">
          <NavItem eventKey={3}>Reports</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
    <Route exact path="/" component={Home} />
    <Route exact path="/customers" render={() => <div>Customers</div>} />
    <Route exact path="/expenses" render={() => <div>Expenses</div>} />
    <Route exact path="/charts" render={() => <div>Charts</div>} />
    <Route exact path="/chickens" render={() => <div>Chickens</div>} />
  </div>
);

export default App;
