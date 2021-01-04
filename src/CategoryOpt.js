import React from 'react';
import useStore from './useStore';

const CategoryOpt = () => {
    const {category} = useStore();

    return(
    category.map(x =>{
        return <option key={x}>{x}</option>;
    }))
}

export default CategoryOpt;