import React from 'react';
import JokesCounter from './JokesCounter';
import useStore from './useStore';

const JokesDiv = () => {

    const {jokes} = useStore();


    const CheckArray = () => {
        if(Array.isArray(jokes)){
            if(jokes.length){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    return (
        <div style={{
            background: 'BlanchedAlmond',
            height: 'auto',
            minHeight: '120px',
            margin: '1em',
            position: 'relative'
            }}>
                <div style={{
                    width: '680px'
                    }}>
                    <ul>
                        {CheckArray()
                        ? 
                            jokes.map((y) =>
                            {return (<li style={{margin: '5px'}} key={y.id}>{y.joke}</li>);})
                        :
                            <><br/><p>No jokes fetched.</p></>
                        }
                    </ul>
                </div>

                <JokesCounter />
        </div>
    );
}

export default JokesDiv;