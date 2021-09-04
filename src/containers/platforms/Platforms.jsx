import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Container } from './styles';
import { fetchPlatforms } from '../../store/actions';
import Loader from '../../components/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const RenderPage = () => {
  const { platforms } = useSelector((s) => s.platformsReducers);
  const classes = useStyles();
  return (
    <Container padding={'1%'}>
      {platforms &&
        platforms.map((elem) => (
          <Container padding={'1%'}>
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
                  <IconButton aria-label='add to favorites'>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </CardActions>
              </Container>
            </Card>
          </Container>
        ))}
    </Container>
  );
};

export default function Platforms() {
  const dispatch = useDispatch();
  const { isLoadingPlatforms } = useSelector((s) => s.platformsReducers);

  useEffect(() => {
    dispatch(fetchPlatforms());
  }, []);

  return isLoadingPlatforms ? <Loader loading /> : <RenderPage />;
}
