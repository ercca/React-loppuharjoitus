import React, {useState} from 'react';
import useStore from './useStore';

const JokeCount = () => {
    const {count, setCount} = useStore();

    return(
        <div style={{width: '150px', float: 'left'}}>
        <label>Amount:</label>
        <br/>
        <input data-testid="count" type="number" min="1" style={{
            margin: '0.5em',
            marginTop: '1em',
            width: '100px'}}
            onChange={(e) => {
                e.target.value < 1
                ?
                setCount('1')
                :
                setCount(e.target.value)
            }}
            value={count}
        />
        </div>
    );
}

export default JokeCount;