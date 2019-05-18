import styled, { keyframes } from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLogo = styled.div`
  .app-spin {
    animation: ${rotate} infinite 2s linear;
    height: 15vmin;
    pointer-events: none;
  }
`;
