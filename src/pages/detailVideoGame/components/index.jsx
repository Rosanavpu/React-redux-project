import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Container, StyledButton } from './styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    padding: '20%',
    width: '500px',
    margin: 'auto',
  },
}));

const DetailVideogameComponent = ({ videoGame }) => {
  const classes = useStyles();
  return (
    <Container justifyContent='center' width={'80%'} key={`Detail- ${videoGame.id}`}>
      <Card>
        <StyledButton href='/'>{'< Go to VideoGames'}</StyledButton>
        <CardHeader title={videoGame.name} subheader={`Rating top: ${videoGame.rating_top}`} />
        {videoGame.background_image && (
          <CardMedia
            className={classes.media}
            image={videoGame.background_image}
            title='Detail VideoGame'
          />
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

DetailVideogameComponent.propTypes = {
  videoGame: PropTypes.object,
};

export default DetailVideogameComponent;
