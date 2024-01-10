import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

const tracks = [
    {
      id: 1,
      name: 'Chanson 1',
      artist: 'Artiste 1',
      album: '3:45'
    },
    {
      id: 2,
      name: 'Chanson 2',
      artist: 'Artiste 2',
      album: '4:20'
    },
    {
      id: 3,
      name: 'Chanson 3',
      artist: 'Artiste 3',
      album: '2:55'
    },
    {
      id: 4,
      name: 'Chanson 4',
      artist: 'Artiste 4',
      album: '2:15'
    },
    {
      id: 5,
      name: 'Chanson 5',
      artist: 'Artiste 5',
      album: '2:55'
    },
    {
      id: 6,
      name: 'Chanson 6',
      artist: 'Artiste 6',
      album: '2:55'
    },
    {
      id: 7,
      name: 'Chanson 7',
      artist: 'Artiste 7',
      album: '2:55'
    },
    
];

const TrackList = (props) => {
    return (
      <div className="track-list">
        {tracks.map(track => (
          <Track
            key={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}
            result={props.result}
          />
        ))}
      </div>
    );
  };

  export default TrackList;