import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loader from '../../components/Loader';
import ArtistsList from '../../components/ArtistsList';
import Header from '../../components/Header';

const POPULAR_ARTISTS_QUERY = gql`
  query POPULAR_ARTISTS_QUERY {
    popular_artists {
      artists {
        id
        name
        bio
        imageUrl
      }
    }
  }
`;

const Feed = () => (
  <div>
    <Header />
    <Query query={POPULAR_ARTISTS_QUERY}>
      {({ data, loading }) => {
        if (loading) return <Loader />;
        return (
          <ArtistsList artists={data.popular_artists.artists} />
        );
      }}
    </Query>
  </div>
);

export default Feed;
