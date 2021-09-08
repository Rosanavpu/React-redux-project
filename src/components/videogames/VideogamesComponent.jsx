import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchVideogameDetail } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const VideogameComponent = ({ videoGames, videoGameSearch }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Container padding={'1%'}>
      {videoGameSearch &&
        videoGameSearch.map((elem, index) => (
          <Container padding={'1%'} key={`card-search${index}`}>
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
                        dispatch(fetchVideogameDetail(elem.id));
                      }}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Link>
                </CardActions>
              </Container>
            </Card>
          </Container>
        ))}
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
                        dispatch(fetchVideogameDetail(elem.id));
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
export { VideogameComponent };
