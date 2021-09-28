import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailVideoGame from './pages/detailVideoGame';
import VideoGames from './pages/videoGames';
import PageNotFound from './shared/pageNotFound';
import Navbar from './pages/navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={VideoGames} />
          <Route exact path='/videoGame/:id' component={DetailVideoGame} />
          <Route path='*' exact component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
