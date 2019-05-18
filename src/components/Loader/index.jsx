import React from 'react';
import { StyledDiv, StyledLogo } from './style';
import spin from '../../spin.svg';

const Loader = () => (
  <StyledDiv>
    <h3> Loading Resources... </h3>
    <StyledLogo>
      <img src={spin} className="app-spin" alt="logo" />
    </StyledLogo>
  </StyledDiv>
);

export default Loader;
