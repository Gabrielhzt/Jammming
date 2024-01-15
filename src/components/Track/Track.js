import React from 'react';
import './Track.css';

const Track = (props) => {
  console.log('props.track:', props.track);

  function passTrack() {
    props.onAdd(props.track);
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
  }

  if (props.result) {
    return (
      <div className='result'>
        <div className='content'>
          <div className='img'>
            {props.track.images && props.track.images.length > 0 && (
              <img src={props.track.images[0].url} alt="Track" />
            )}
          </div>
          <div className='info'>
            <h2>{props.track.name}</h2>
            <p>{props.track.artist}</p>
          </div>
        </div>
        <button className='add' onClick={passTrack}>Add</button>
      </div>
    );
  } else {
    return (
      <div className='playlist'>
        <div className='content'>
          <div className='img'>
            {props.track.images && props.track.images.length > 0 && (
              <img src={props.track.images[0].url} alt="Track" />
            )}
          </div>
          <div className='info'>
            <h2>{props.track.name}</h2>
            <p>{props.track.artist}</p>
          </div>
        </div>
        <div className='album'>
          <p>{props.track.album}</p>
        </div>
        <button className='remove' onClick={passTrackToRemove}>Remove</button>
      </div>
    );
  }
};

export default Track;
