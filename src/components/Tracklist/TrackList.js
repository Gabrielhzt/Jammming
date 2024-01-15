import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


const TrackList = (props) => {

    return (
      <div className="track-list">
        {props.userSearchResults.map((track) => (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            result={props.result}
          />
        ))}
      </div>
    );
  };

  export default TrackList;