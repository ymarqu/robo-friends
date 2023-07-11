import React from "react";

const SearchBox = ({searchfield, searchChange}) => {

return(
    <div>
    <input className="pa3 ba b--greeen bg-lightest-red" type="search" placeholder="Search Robot by Name" onChange={searchChange}/>
    </div>
);

}

export default SearchBox;
