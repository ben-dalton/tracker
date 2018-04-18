import React from 'react';
import { Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import { getNavLinks } from '../../utils/getNavLinks';
import * as colors from '../../assets/styles/_variables.scss';

const StyledWell = styled(Well)`
  width: 80%;
  max-width: 700px;
  margin: 30px auto;
  background: white !important;
`;

const StyledButton = styled(Button)`
  height: 50px;
  padding: 10px;
  :hover {
    background: #fafafa !important;
    border-color: ${colors.blue} !important;
  }
`;

const BtnContentContainer = styled.div`
  width: 160px;
  margin: 0 auto;
  position: relative;
  img {
    position: absolute;
    left: -2px;
  }
  span {
    position: absolute;
    left: 80px;
    top: 3px;
  }
`;

const Home = () => (
  <div>
    <h1 className="text-center">Welcome to Tracker!</h1>
    <h3 className="text-center">Let's get tracking</h3>
    <StyledWell style={{ width: '80%', maxWidth: '700px' }}>
      {getNavLinks().map(link => (
        <LinkContainer to={link.path} key={link.path}>
          <StyledButton bsSize="large" block>
            <BtnContentContainer>
              {link.icon}
              <span>{link.label}</span>
            </BtnContentContainer>
          </StyledButton>
        </LinkContainer>
      ))}
    </StyledWell>
  </div>
);
export default Home;
