import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoGames from './containers/videogames/Videogames';
import SearchAppBar from './containers/navbar/Navbar';
import DetailVideogame from './containers/detailVideogame/Detail';

function App() {
  return (
    <Router>
      <div>
        <Route component={SearchAppBar} />
        <Switch>
          <Route exact path='/' component={VideoGames} />
          <Route exact path='/videoGame/:id' component={DetailVideogame} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
