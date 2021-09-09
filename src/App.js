import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoGames from './pages/videoGames';
import Navbar from './pages/navbar';
import PageNotFound from './shared/pageNotFound';
import DetailVideogame from './pages/detailVideoGame';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
