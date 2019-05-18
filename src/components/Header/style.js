import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 1.8em;
  color: ${props => props.theme.color.c1}
`;
