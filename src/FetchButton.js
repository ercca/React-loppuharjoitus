import React, { useEffect, useState } from 'react';
import useStore from './useStore';

const FetchButton = () => {
    const {searchId, jokes, chosenCategory, count, firstName, lastName, addJokes, adduniqueIdarray} = useStore();
    const [errortxt, setErrortxt] = useState();

    const LoadJokes = () => {
        let base_url = "https://api.icndb.com/jokes/random/";
        if(chosenCategory === 'all' & searchId === '')
        {
          fetch(base_url + `${count}?firstName=${firstName}&lastName=${lastName}`)
          .then((resp) => {
            return resp.json();
          })
          .then((json) => {
            setErrortxt(null);
            addJokes(json.value);
          })
        }
        else if(chosenCategory !== 'all' & searchId === '')
        {
          fetch(base_url + `${count}?firstName=${firstName}&lastName=${lastName}&limitTo=[${chosenCategory}]`)
          .then((resp) => {
            return resp.json();
          })
          .then((json) => {
            setErrortxt(null);
            addJokes(json.value);
          })
        }
        else if (searchId !== '') {
          fetch(`https://api.icndb.com/jokes/${searchId}`)
          .then((resp) => {
            return resp.json();
          })
          .then((json) => {
            if (json.type === "NoSuchQuoteException") {
              setErrortxt(
                <p style={{color: "red"}}>
                  No joke found with id={searchId}.
                </p>
              );
              addJokes([]);
            }
            else{
              setErrortxt(null);
              addJokes([json.value]);
            }
          })
        }
    };

    useEffect(() => {
      const CheckUniqueJokes = () => {
        adduniqueIdarray(jokes)
      }
      CheckUniqueJokes();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jokes]);

    
    return (
        <div>
          {errortxt}
          <button onClick={LoadJokes} style={{
              margin: '0.5em',
              marginBottom: '1em'
          }}>Fetch</button>
        </div>
    );
}

export default FetchButton;