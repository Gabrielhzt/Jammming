import React, { useCallback, useState } from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/TrackList'

const Playlist = (props) => {
    const result = false

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState("My Playlist");

    const handleNameChange = useCallback(
        (event) => {
          setNewTitle(event.target.value);
        },
        []
    );

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
      
        props.onNameChange(newTitle);
      
        setIsEditing(false);
    };

    
    

    return (
        <div className='all'>
            <div className='infos'>
                <div className='image'>
                <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Favicon" />
                </div>
                <div className='info-playlist'>
                    <p>Playlist</p>
                    {isEditing ? (
                      <input className='change' onChange={handleNameChange} value={newTitle} />
                    ) : (
                      <h1>{newTitle}</h1>
                    )}
                    <p>Gab</p>
                </div>
            </div>

            <div className='link'>
                {isEditing ? (
                    <p onClick={handleSave}>Save your modifications</p>
                ) : (
                    <p onClick={handleEdit}>Modify Your Playlist</p>
                )}
                <button onClick={props.onSave} >Save to Spotify</button>
            </div>

            <div className='musics-a'>
            {props.playlistTracks.length > 0 ? (
                <div className='musics'>
                     <TrackList result={result} userSearchResults={props.playlistTracks} onRemove={props.onRemove} />
                </div>
            ) : (
              <p className='nothing-b'>Your playlist is empty.</p>
            )}
            </div>
        </div>
    )
}

export default Playlist;