import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';

import { ic_people_outline as peopleIcon } from 'react-icons-kit/md/ic_people_outline';
import { ic_attach_money as moneyIcon } from 'react-icons-kit/md/ic_attach_money';
import { ic_pie_chart_outlined as chartIcon } from 'react-icons-kit/md/ic_pie_chart_outlined';

import Chickens from '../chickens/components/Chickens';
import Customers from '../customers/components/Customers';
import Budget from '../budget/components/Budget';
import Reports from '../reports/components/Reports';
import chickenIcon from '../assets/images/chicken.png';

const StyledIcon = styled(Icon)`
  position: absolute;
  left: -2px;
`;

export const getNavLinks = () => [
  {
    label: 'Customers',
    path: 'customers',
    icon: <StyledIcon size={32} icon={peopleIcon} />,
    component: Customers,
  },
  {
    label: 'Chickens',
    path: 'chickens',
    icon: <img src={chickenIcon} alt="chicken" style={{ width: '32px' }} />,
    component: Chickens,
  },
  {
    label: 'Budget',
    path: 'budget',
    icon: <StyledIcon size={32} icon={moneyIcon} />,
    component: Budget,
  },
  {
    label: 'Reports',
    path: 'reports',
    icon: <StyledIcon size={32} icon={chartIcon} />,
    component: Reports,
  },
];

export default getNavLinks;
