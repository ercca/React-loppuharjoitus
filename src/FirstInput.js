import React from 'react';
import useStore from './useStore';

const FirstInput = ({dv}) => {
    const {setfirstName} = useStore();

    return(
        <div style={{width: '150px', float: 'left'}}>
        <label>First Name:</label>
        <br/>
        <input placeholder={dv} style={{margin: '0.5em', marginTop: '1em', width: '100px'}}
        onChange={(e) => setfirstName(e.target.value)}
        />
        </div>
    );
}

export default FirstInput;