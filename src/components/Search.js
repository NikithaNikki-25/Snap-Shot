import React, {useContext, useState} from "react";
import {GalleryContext} from "../context";
function Search (){
    const [searchValue, setSearchValue] = useState(" ");
    const {setSearchQuery} = useContext(GalleryContext);
    const handleSearch =(e)=>{
        setSearchValue(e.target.value);
        setSearchQuery(e.target.value);
    };
    return(
        <div>
            <input type="text" value={searchValue}
            onChange = {handleSearch}/>
        </div>
    )

}
export default Search;