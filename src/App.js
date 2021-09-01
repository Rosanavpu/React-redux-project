import React from 'react'
import Platforms from './containers/platforms/Platforms';
import SearchAppBar from './containers/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Platforms />
    </div>
  );
}

export default App;
