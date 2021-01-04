import React, {useEffect} from 'react';
import CategoryOpt from './CategoryOpt';
import useStore from './useStore';

const Category = () => {
    const {setchosenCategory, setCategory} = useStore();

    useEffect(() => {
        const fetchCategories = () => {
            let base_url = "http://api.icndb.com/categories";
            fetch(base_url)
            .then((resp) => {
              return resp.json();
            })
            .then((json) => {
                setCategory(json.value);
            })
        };
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div style={{width: '150px', float: 'left'}}>
        <label>Category:</label>
        <br/>
        <select style={{
            width: '100px',
            margin: '0.5em',
            marginTop: '1em'}}
            onChange={(e) => setchosenCategory(e.target.value)}
            >
            <CategoryOpt />
        </select>
        </div>
    )
}

export default Category;