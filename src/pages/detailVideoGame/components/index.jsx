import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Container, StyledButton, StyledCardMedia } from './styles';

const DetailVideoGameComponent = ({ videoGame }) => {
  return (
    <Container justifyContent='center' width={'80%'} key={`Detail- ${videoGame.id}`}>
      <Card>
        <StyledButton href='/'>{'< Go to VideoGames'}</StyledButton>
        <CardHeader title={videoGame.name} subheader={`Rating top: ${videoGame.rating_top}`} />
        {videoGame.background_image && (
          <StyledCardMedia image={videoGame.background_image} title='Detail VideoGame' />
        )}
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {videoGame.description.replace(/<[^>]+>/g, '')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

DetailVideoGameComponent.propTypes = {
  videoGame: PropTypes.object.isRequired,
};

DetailVideoGameComponent.defaultProps = {
  videoGame: {},
};

export default DetailVideoGameComponent;
