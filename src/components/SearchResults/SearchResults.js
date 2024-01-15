import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/TrackList';

const SearchResults = (props) => {

  const result = true;

  return (
    <div className='list'>
      <TrackList result={result} userSearchResults={props.userSearchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;
