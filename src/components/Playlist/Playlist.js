import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/TrackList'

const Playlist = () => {

    const result = false

    return (
        <div className='all'>
            <div className='infos'>
                <div className='image'>
                    <img/>
                </div>
                <div className='info-playlist'>
                    <p>Playlist</p>
                    <h1>My Playlist #1</h1>
                    <p>Gab</p>
                </div>
            </div>

            <div className='link'>
                <p>Modify Your Playlist</p>
                <button>Save to Spotify</button>
            </div>

            <div className='musics'>
              <TrackList result={result} />
            </div>
        </div>
    )
}

export default Playlist;