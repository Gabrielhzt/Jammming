import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

    return (
        <div className='bar'>
            <input className="search" placeholder="Enter A Song Title" onChange={handleTermChange} />
            <button onClick={passTerm}>Search</button>
        </div>
    )
}

export default SearchBar;