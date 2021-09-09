import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoGames from './containers/videogames/Videogames';
import DetailVideogame from './containers/detailVideogame/Detail';
import SearchAppBar from './containers/navbar/Navbar';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <div>
        <SearchAppBar search={false} />
        <Switch>
          <Route exact path='/' component={VideoGames} />
          <Route exact path='/videoGame/:id' component={DetailVideogame} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
