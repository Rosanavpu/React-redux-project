import React from 'react';
import PropTypes from 'prop-types';
import VideogameComponent from './components';

const VideoGames = ({ videoGames }) => {
  return <VideogameComponent videoGames={videoGames} />;
};

VideoGames.propTypes = {
  videoGames: PropTypes.array,
};

export default VideoGames;
