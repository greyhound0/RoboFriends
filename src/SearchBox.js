import React from "react";

const SearchBox = ({searchChange, value})=>{
    return(
        <div>
            <input
            value={value}
             className="pa2 bs b--green bg-lightest-blue" type='search'
             placeholder="search robots"
             onChange={searchChange}
             />
        </div>
    )
}

export default SearchBox