import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoGames from './containers/videogames/Videogames';
import DetailVideogame from './containers/detailVideogame/Detail';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={VideoGames} />
          <Route exact path='/videoGame/:id' component={DetailVideogame} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
