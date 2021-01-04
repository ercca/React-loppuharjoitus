import { useContext } from "react";
import { StoreContext } from "./store-context";

const useStore = () => {
  const [store, setStore] = useContext(StoreContext);

  const addJokes = (joke) => {
    setStore({...store, jokes: joke});
  };

  const setchosenCategory = (value) => {
    setStore({...store, chosenCategory: value})
  };

  const setCategory = (value) => {
    let new_cat = store.category.concat(value);
    setStore({...store, category: new_cat});
  };

  const setCount = (value) => {
    setStore({...store, count: value});
  };

  const setfirstName = (value) => {
    if(value === ''){
      setStore({...store, firstName: 'Chuck'})
    }
    else{
      setStore({...store, firstName: value});
    }
  };

  const setlastName = (value) => {
    if(value === ''){
      setStore({...store, lastName: 'Norris'})
    }
    else{
      setStore({...store, lastName: value});
    }
  };

  const adduniqueIdarray = (value) => {
    let new_uniq = store.uniqueIdarray;

    value.forEach(element => {
      if(!new_uniq.includes(element.id)){
        new_uniq = [...new_uniq, element.id]
      }
    });
    setStore({...store, uniqueIdarray: new_uniq});
  };

  const setSearchId = (id) => {
    setStore({...store, searchId: id})
  }

  return {
    chosenCategory: store.chosenCategory,
    category: store.category,
    count: store.count,
    firstName: store.firstName,
    lastName: store.lastName,
    jokes: store.jokes,
    uniqueIdarray: store.uniqueIdarray,
    searchId: store.searchId,
    addJokes,
    setchosenCategory,
    setCategory,
    setCount,
    setfirstName,
    setlastName,
    adduniqueIdarray,
    setSearchId
  };
};

export default useStore;