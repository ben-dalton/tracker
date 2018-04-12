import React from 'react';
import { Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_people_outline } from 'react-icons-kit/md/ic_people_outline';
import { ic_attach_money } from 'react-icons-kit/md/ic_attach_money';
import { ic_pie_chart_outlined } from 'react-icons-kit/md/ic_pie_chart_outlined';
import * as colors from '../assets/styles/_variables.scss'

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
    border-color: ${colors.blue}
  }
`;

const BtnContentContainer = styled.div`
  width: 160px;
  margin: 0 auto;
  position: relative
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
`

const Home = () => (
  <div>
    <h1 className="text-center">Welcome to Tracker!</h1>
    <h3 className="text-center">Let's get tracking</h3>
    <StyledWell style={{ width: '80%', maxWidth: '700px' }}>
      <LinkContainer to="customers">
        <StyledButton bsSize="large" block>
          <BtnContentContainer>
            <StyledIcon size={32} icon={ic_people_outline} />
            <span>Customers</span>
          </BtnContentContainer>
        </StyledButton>
      </LinkContainer>
      <LinkContainer to="expenses">
        <StyledButton bsSize="large" block>
          <BtnContentContainer>
            <StyledIcon size={32} icon={ic_attach_money} />
            <span>Expenses</span>
          </BtnContentContainer>
        </StyledButton>
      </LinkContainer>
      <LinkContainer to="charts">
        <StyledButton bsSize="large" block>
          <BtnContentContainer>
            <StyledIcon size={32} icon={ic_pie_chart_outlined} />
            <span>Charts</span>
          </BtnContentContainer>
        </StyledButton>
      </LinkContainer>
      <LinkContainer to="chickens">
        <StyledButton bsSize="large" block>
          <BtnContentContainer>
            <img src={chickenIcon} alt="chicken" style={{width: '32px'}} />
            <span>Chickens</span>
          </BtnContentContainer>
        </StyledButton>
      </LinkContainer>
    </StyledWell>
  </div>
);

export default Home;
