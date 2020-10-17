import React, { useState } from 'react';
import './style.css';

function InputSearch(props) {
    const [isFocused, setFocus] = useState(false)

    const cbFocusState = (_s) => {
        setFocus(prevState => _s);
    }

    const cbOnchange = (e) => {
        const query = e.target.value;

        
    }

    return (
        <div className="wrap-inp-search">
            <div className={[`wrap-box`, isFocused ? `active` : ``].join(' ')}>
                <div className="wrap-input">
                    <input type="text" aria-label="search users" placeholder="Search users by ID, address, name"
                        onFocus={() => cbFocusState(true)}
                        onBlur={() => cbFocusState(false)}
                        className="inp-search"
                        onChange={cbOnchange} />
                </div>
                <div className="wrap-results">
                    <h4>Loading...</h4>
                </div>
            </div>
        </div>
    )
}

export default InputSearch;