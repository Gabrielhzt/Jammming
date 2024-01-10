import React from 'react';
import './SearchResults.css'
import TrackList from '../Tracklist/TrackList';

const SearchResults = () => {

    const result = true;
    return (
        <div className='list'>
            <TrackList result={result} />
        </div>
    )
};

export default SearchResults;