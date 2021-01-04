import React from 'react';
import useStore from './useStore';

const LastInput = ({dv}) => {
    const {setlastName} = useStore();

    return(
        <div style={{width: '150px', float: 'left'}}>
        <label>Last Name:</label><br/>
        <input placeholder={dv} style={{margin: '0.5em', marginTop: '1em', width: '100px'}}
        onChange={(e) => setlastName(e.target.value)}
        />
        </div>
    );
}

export default LastInput;