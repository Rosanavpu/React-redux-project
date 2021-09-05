import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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
import { fetchVideogames, fetchVideogameDetail, setVideogameReset } from '../../store/actions';
import Loader from '../../components/loader/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const RenderPage = () => {
  const dispatch = useDispatch();
  const { videoGames, videoGameSearch } = useSelector((s) => s.videogamesReducers);
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

export default function VideoGames() {
  const dispatch = useDispatch();
  const { isLoadingVideoGames } = useSelector((s) => s.videogamesReducers);

  useEffect(() => {
    dispatch(setVideogameReset());
    dispatch(fetchVideogames());
  }, []);

  return isLoadingVideoGames ? <Loader loading /> : <RenderPage />;
}
