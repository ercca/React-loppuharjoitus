import React from 'react';
import Category from './Category';
import FetchButton from './FetchButton';
import JokeCount from './JokeCount';
import FirstInput from './FirstInput';
import LastInput from './LastInput';
import IdSearch from './IdSearch';


const SearchBar = () => {
    return (
        <div style={{
            background: 'BlanchedAlmond',
             justifyContent: 'center',
             display: 'flex'
             }}>
            <div style={{margin: '0 auto'}}>
                <Category/>
                <JokeCount />
                <FirstInput dv="Chuck" />
                <LastInput dv="Norris" />
                <br />
                <IdSearch />
                <br/>
                <FetchButton />
            </div>
        </div>
    );
}

export default SearchBar;