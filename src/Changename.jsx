import React,{useRef} from "react";

function Changename() {
    const inputRef = useRef(null);
    const onClick = ()=> {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    };

    return(
        <div>
            <h4>Brian</h4>
            <br></br>
            <input placeholder="Ex..." type="text" ref={inputRef} className="myInput" />
            <button onClick={onClick} className="changeButton">Change Name</button>
        </div>
    )
}

export default Changename;