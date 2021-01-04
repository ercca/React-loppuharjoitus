import React from 'react';
import useStore from './useStore';


const JokesCounter = () => {
    const { uniqueIdarray } = useStore();

    const CheckArray = () => {
        if(Array.isArray(uniqueIdarray)){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <div style={{
            width: '10em',
            border: '1px  solid black',
            top: '1em',
            right: '1em',
            position: 'absolute'
            }}>
            <p>Unique jokes count:</p>
            {CheckArray() ? <p>{uniqueIdarray.length}</p> : <p>0</p>}
        </div>
    );
}

export default JokesCounter;