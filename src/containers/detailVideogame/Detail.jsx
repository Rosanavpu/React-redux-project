import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Container } from './styles';
import Loader from '../../components/Loader';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    padding: '20%',
    width: '500px',
    margin: 'auto',
  },
}));

const RenderPage = () => {
  const classes = useStyles();
  const { videoGame } = useSelector((s) => s.videogamesReducers);

  return (
    <Container justifyContent='center' width={'80%'}>
      <Card>
        <CardHeader title={videoGame.name} subheader={`Rating top: ${videoGame.rating_top}`} />
        <CardMedia
          className={classes.media}
          image={videoGame.background_image}
          title='Detail VideoGame'
        />
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
  const { isLoadingVideogameDetail } = useSelector((s) => s.videogamesReducers);

  return isLoadingVideogameDetail ? <Loader loading /> : <RenderPage />;
}
