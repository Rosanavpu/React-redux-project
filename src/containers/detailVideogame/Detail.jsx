import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Container } from './styles';
import Loader from '../../components/loader/Loader';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    padding: '20%',
    width: '500px',
    margin: 'auto',
  },
}));

const RenderPage = ({ videoGame }) => {
  const classes = useStyles();
  return (
    <Container justifyContent='center' width={'80%'} key={`Detail- ${videoGame.id}`}>
      <Card>
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
            {videoGame.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default function DetailVideogame() {
  const { isLoadingVideogameDetail, videoGame } = useSelector((s) => s.videogamesReducers);
  return isLoadingVideogameDetail && Object.entries(videoGame).length <= 0 ? (
    <Loader loading />
  ) : (
    <RenderPage videoGame={videoGame} />
  );
}
