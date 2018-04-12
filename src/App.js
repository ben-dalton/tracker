import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './assets/styles/App.sass';

import Home from './components/Home';

const App = () => (
  <div className="App">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Tracker</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="customers">
          <NavItem eventKey={1}>Customers</NavItem>
        </LinkContainer>
        <LinkContainer to="expenses">
          <NavItem eventKey={2}>Expenses</NavItem>
        </LinkContainer>
        <LinkContainer to="charts">
          <NavItem eventKey={3}>Charts</NavItem>
        </LinkContainer>
        <LinkContainer to="chickens">
          <NavItem eventKey={4}>Chickens</NavItem>
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
