import React, { useState, useCallback } from 'react';
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([])

  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage instanceof Blob) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setNewImage(imageUrl);
    } else {
      console.error("Invalid image file");
    }
  };
  
  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    const playlistImage = newImage; // Pass the newImage to savePlaylist
    Spotify.savePlaylist(playlistName, trackURIs, playlistImage).then(() => {
      updatePlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  } 

  return (
    <div className='grid-b'>
      <div className='grid'>
        <section className='Title'>
            <h1>Jammming <span className='desc'>Powered by Spotify</span></h1>
            <h2>Let's find something for your playlist</h2>
        </section>
        <section className='Search'>
            <SearchBar onSearch={search} />
            <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
        </section>
        <section className='Playlist'>
            <Playlist 
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onImageChange={handleImageChange}
              onRemove={removeTrack}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
            />
        </section>
        </div>
    </div>
  );
};

export default App;
