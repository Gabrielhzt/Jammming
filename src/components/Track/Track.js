import React, {useState} from 'react';
import './Track.css';

const Track = (props) => {

    if(props.result) {
        return (
            <div className='result'>
                <div className='content'>
                    <div className='img'>
                        <img src='https://media.pitchfork.com/photos/64c3bee4a7c2659c4cdcf382/master/pass/Travis%20Scott%20-%20Utopia.jpeg'/>
                    </div>
                    <div className='info'>
                        <h2>{props.name}</h2>
                        <p>{props.artist}</p>
                    </div>
                </div>
                <button className='add' >Add</button>
            </div>
        )
    }else {
        return (
            <div className='playlist'>
                <div className='content'>
                    <div className='img'>
                        <img src='https://media.pitchfork.com/photos/64c3bee4a7c2659c4cdcf382/master/pass/Travis%20Scott%20-%20Utopia.jpeg'/>
                    </div>
                    <div className='info'>
                        <h2>{props.name}</h2>
                        <p>{props.artist}</p>
                    </div>
                </div>
                <div>
                    <p>{props.album}</p>
                </div>
                <button className='remove' >Remove</button>
            </div>
        )
    }
}

export default Track;