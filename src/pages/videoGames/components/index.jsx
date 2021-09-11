import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Container } from './styles';
import { fetchVideoGameDetail } from '../../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const VideogameComponent = ({ videoGames, searchVideoGame }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Container padding={'1%'}>
      {videoGames && videoGames.length == 0 && searchVideoGame && searchVideoGame.length > 0 && (
        <Container padding={'1%'}>
          <Typography variant='h5' component='h2'>
            Sorry, we can not find this VideoGame
          </Typography>
        </Container>
      )}
      {videoGames &&
        videoGames.map((elem, index) => (
          <Container padding={'1%'} key={`card-container${index}`}>
            <Card className={classes.root}>
              <CardHeader title={elem.name} />
              <CardMedia
                className={classes.media}
                image={elem.background_image}
                title='Videogame'
              />
              <Container justifyContent={'flex-end'} alignItems={'center'}>
                <CardActions>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Detail
                  </Typography>
                  <Link to={`/videoGame/${elem.id}`} className='btn btn-primary'>
                    <IconButton
                      aria-label='add to favorites'
                      onClick={() => {
                        dispatch(fetchVideoGameDetail(elem.id));
                      }}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Link>
                </CardActions>
              </Container>
            </Card>
          </Container>
        ))}
    </Container>
  );
};

VideogameComponent.propTypes;

export default VideogameComponent;
