import React, {useRef} from "react";
function SearchBar(props){
    const inputRef = useRef();
    return(
        <div style={{textAlign: "center"}}>
            <input type="text" placeholder="Search" ref ={inputRef} onChange = {()=> props.setEmployees({type: "change", input: inputRef.current.value})} ></input>
        </div>
    );

}

export default SearchBar;