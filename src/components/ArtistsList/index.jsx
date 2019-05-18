import React from 'react';
import { array } from 'prop-types';
import { StyledDiv, StyledCard } from './style';

const ArtistsList = ({ artists }) => (
  <StyledDiv>
    {artists.map(artist => (
      <StyledCard>
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
};

export default ArtistsList;
