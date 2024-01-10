import React from 'react';
import './SearchBar.css'

const SearchBar = () => {

    return (
        <div className='bar'>
            <input className="search" placeholder="Enter A Song Title" />
            <button>Search</button>
        </div>
    )
}

export default SearchBar;