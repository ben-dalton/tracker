import React from 'react';
import { Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_people_outline as peopleIcon } from 'react-icons-kit/md/ic_people_outline';
import { ic_attach_money as moneyIcon } from 'react-icons-kit/md/ic_attach_money';
import { ic_pie_chart_outlined as chartIcon } from 'react-icons-kit/md/ic_pie_chart_outlined';
import * as colors from '../assets/styles/_variables.scss';

const chickenIcon = require('../assets/images/chicken.png');

const StyledWell = styled(Well)`
  width: 80%;
  max-width: 700px;
  margin: 30px auto;
`;

const StyledButton = styled(Button)`
  height: 50px;
  padding: 10px;
  :hover {
    background: #fafafa;
    border-color: ${colors.blue};
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

const StyledIcon = styled(Icon)`
  position: absolute;
  left: -2px;
`;

export const navLinks = [
  {
    label: 'Customers',
    path: 'customers',
    icon: <StyledIcon size={32} icon={peopleIcon} />,
  },
  {
    label: 'Chickens',
    path: 'chickens',
    icon: <img src={chickenIcon} alt="chicken" style={{ width: '32px' }} />,
  },
  {
    label: 'Budget',
    path: 'budget',
    icon: <StyledIcon size={32} icon={moneyIcon} />,
  },
  {
    label: 'Reports',
    path: 'reports',
    icon: <StyledIcon size={32} icon={chartIcon} />,
  },
];

const Home = () => (
  <div>
    <h1 className="text-center">Welcome to Tracker!</h1>
    <h3 className="text-center">Let's get tracking</h3>
    <StyledWell style={{ width: '80%', maxWidth: '700px' }}>
      {navLinks.map(link => (
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
