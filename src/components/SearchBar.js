import React, {useRef} from "react";
function SearchBar({handleChange}){
    const inputRef = useRef();
    return(
        <div style={{textAlign: "center"}}>
            <input 
            type="text" 
            placeholder="Search" 
            ref ={inputRef} 
            onChange = {()=> handleChange(inputRef.current.value)} >
            </input>
        </div>
    );

}

export default SearchBar;