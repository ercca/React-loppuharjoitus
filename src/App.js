import React from 'react';
import JokesDiv from './JokesDiv';
import SearchBar from './SearchBar';

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <p style={{fontSize: '2em'}}>Jokes</p>

      <SearchBar />
      <JokesDiv />
    </div>
  );
}

export default App;
