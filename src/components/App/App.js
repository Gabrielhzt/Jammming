import React from 'react';
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {


  return (
    <div>
        <section className='Title'>
            <h1>Jammming <span className='desc'>Powered by Spotify</span></h1>
            <h2>Let's find something for your playlist</h2>
        </section>
        <section className='Search'>
            <SearchBar />
            <SearchResults />
        </section>
    </div>
  );
};

export default App;
