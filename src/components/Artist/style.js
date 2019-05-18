import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 70%;
  background: #fafafa;
  margin: auto;
  height: 100%;
  min-width: 400px;
  padding: 20px;

  #name {
    font-size: 2em;
    font-weight: 400;
    display: block;
  }

  #bio {
    font-size: 1.2em;
    display: block;
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 20px 47.5px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const ArtistWorks = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

export const Art = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 200px;
  
  #title {
    display: block;
    width: 100%;
    overflow-wrap: break-word;
    font-size: 0.9em;
    color: darkgray;
    margin: 5px 0;
  }
`;
