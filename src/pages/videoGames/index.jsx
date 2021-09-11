import React from 'react';
import PropTypes from 'prop-types';
import VideogameComponent from './components';

const VideoGames = ({ videoGames, searchVideoGame }) => {
  return <VideogameComponent videoGames={videoGames} searchVideoGame={searchVideoGame} />;
};

VideoGames.propTypes = {
  videoGames: PropTypes.array,
  searchVideoGame: PropTypes.string,
};

export default VideoGames;
