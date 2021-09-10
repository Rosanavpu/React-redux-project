import React from 'react';
import PropTypes from 'prop-types';
import VideogameComponent from './components';
import { defaultProps } from 'default-props';

const VideoGames = ({ videoGames }) => {
  return <VideogameComponent videoGames={videoGames} />;
};

VideoGames.propTypes = {
  videoGames: PropTypes.array,
};

VideoGames.defaultProps = {
  videoGames: [],
};
export default VideoGames;
