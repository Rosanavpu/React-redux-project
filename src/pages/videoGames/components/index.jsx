import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardHeader, CardActions, IconButton, Typography } from '@material-ui/core';
import { Container, StyledCardMedia, StyledCard } from './styles';
import { fetchVideoGameDetail } from '../../../store/actions';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';

const VideoGameComponent = ({ videoGames }) => {
  const dispatch = useDispatch();
  return (
    <Container padding={'1%'}>
      {videoGames &&
        videoGames.map((elem, index) => (
          <Container padding={'1%'} key={`card-container${index}`}>
            <StyledCard>
              <CardHeader title={elem.name} />
              <StyledCardMedia image={elem.background_image} title='Videogame' />
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
            </StyledCard>
          </Container>
        ))}
    </Container>
  );
};

VideoGameComponent.propTypes = {
  videoGames: PropTypes.array,
};

export default VideoGameComponent;
