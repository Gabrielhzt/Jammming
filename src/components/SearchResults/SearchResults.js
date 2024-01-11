import React, {useState} from 'react';
import './SearchResults.css'
import TrackList from '../Tracklist/TrackList';
import Spotify from '../../util/Spotify';

const SearchResults = (props) => {

    const [term, setTerm] = useState("");

    const [searchResults, setSearchResults] = useState([]);

  const searchSpotify = (term) => {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    }).catch((error) => {
      console.error('Error searching Spotify:', error);
    });
  };

    const result = true;
    return (
        <div className='list'>
            <TrackList result={result} userSearchResults={props.userSearchResults} onAdd={props.onAdd} />
        </div>
    )
};

export default SearchResults;