import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledCard = styled.div`
  width: 450px;
  height: 400px;
  margin-bottom: 130px;

  #imageUrl {
    width: 100%;
    transition: 200ms ease-in-out;

    :hover {
      transform: scale(1.015);
    }
  }

  #artist-details {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #name {
    font-weight: 500;
    font-size: 1.3em;
  }

  #bio {
  }
`;
