import React from 'react';
import useStore from './useStore';

const IdSearch = () => {
    const {searchId ,setSearchId} = useStore();

    return(
        <div style={{width: '150px', margin: '0 auto'}}>
            <label>Search by ID:</label>
            <br/>
            <input type="number" min="1" style={{
                margin: '0.5em',
                marginTop: '1em'}}
                onChange={(e) => {setSearchId(e.target.value.replace("-", ""))}}
                value={searchId}
            />
        </div>
    );
}

export default IdSearch;