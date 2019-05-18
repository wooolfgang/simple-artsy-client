import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { object } from 'prop-types';
import { withRouter } from 'react-router';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Artist from '../../components/Artist';

const GET_ARTIST_QUERY = gql`
  query GET_ARTIST_QUERY ($id: String!) {
    artist(id: $id) {
      id
      name
      nationality
      location
      imageUrl
      hometown
      bio
      carousel {
        images {
          image_url
          title
        }
      }
    }
  }
`;

const ArtistPage = ({ match }) => (
  <div>
    <Header />
    <Query query={GET_ARTIST_QUERY} variables={{ id: match.params.id }}>
      {({ data, loading }) => {
        if (loading) return <Loader />;
        return <Artist artist={data.artist} />;
      }}
    </Query>
  </div>
);

ArtistPage.propTypes = {
  match: object.isRequired,
};

export default withRouter(ArtistPage);
