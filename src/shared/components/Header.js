import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getNavLinks } from '../../utils/getNavLinks';
import logo from '../../assets/images/track2.svg';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ display: 'inline', marginRight: '5px', width: '40px' }}
          />
          Tracker
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      {getNavLinks().map((link, idx) => (
        <LinkContainer key={link.path} to={link.path}>
          <NavItem eventKey={idx}>{link.label}</NavItem>
        </LinkContainer>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
