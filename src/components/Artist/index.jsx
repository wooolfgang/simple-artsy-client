import React from 'react';
import { object } from 'prop-types';
import {
  StyledDiv, Header, ArtistWorks, Art,
} from './style';

const Artist = ({ artist }) => (
  <StyledDiv>
    <Header>
      <div>
        <span id="name">
          {artist.name}
        </span>
        <span id="bio">
          {artist.bio}
        </span>
      </div>
      <img src={artist.imageUrl} alt="artist-main" />
    </Header>
    <ArtistWorks>
      {artist.carousel.images.map((carouselImg) => {
        const src = carouselImg.image_url.replace(':version', 'square');
        return (
          <Art key={carouselImg.title}>
            <img src={src} alt={carouselImg.title} />
            <span id="title">
              {carouselImg.title}
            </span>
          </Art>
        );
      })}
    </ArtistWorks>
  </StyledDiv>
);

Artist.propTypes = {
  artist: object.isRequired,
};

export default Artist;
