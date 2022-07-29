import { useEffect, useLayoutEffect, useRef } from "react";

function Logger() {
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);

    useEffect(()=>{
        inputRef.current.value = "HELLO";
    },[]);

    return (
        <div>
            <h4>logger is running!</h4> 
            <br></br>
            <input type="text" ref={inputRef} value="Brian" style={{width:400, height:50}} className="myInput" />
        </div>
    )
}

export default Logger;