import React from 'react';
import { array, object } from 'prop-types';
import { withRouter } from 'react-router';
import { StyledDiv, StyledCard } from './style';

const ArtistsList = ({ artists, history }) => (
  <StyledDiv>
    {artists.map(artist => (
      <StyledCard onClick={() => history.push(`/artist/${artist.id}`)} key={artist.id}>
        <img src={artist.imageUrl} alt="artist" id="imageUrl" />
        <div id="artist-details">
          <span id="name">{artist.name}</span>
          <span id="bio">{artist.bio}</span>
        </div>
      </StyledCard>
    ))}
  </StyledDiv>
);

ArtistsList.propTypes = {
  artists: array.isRequired,
  history: object.isRequired,
};

export default withRouter(ArtistsList);
