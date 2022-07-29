import React, {useEffect, useState} from "react";
function Counter() {
    var [count,setCount] = useState(0);
    var [max,setMax] = useState(false);
    var [min,setMin] = useState(true);
    const checkMax_Min = () =>{
        console.log(count);
        if (count===10)
            setMax(true);
        else setMax(false);

        if (count===0)
            setMin(true);
        else setMin(false);
    };

    useEffect(checkMax_Min,[count]);
    const addone = ()=> {
        if (!max) setCount(count+1);
    };
    const subtractone = ()=> {
        if (!min) setCount(count-1);
    };

    
    return (
        <div>
            <h4>My counter: {count}</h4>
            <h4>Reach max: {max?"true":"false"}</h4>
            <h4>Reach min: {min?"true":"false"}</h4>
            
            <button onClick={addone} className="mybutton">+</button>
            <button onClick={subtractone} className="mybutton">-</button>
        </div>     
    )
}

export default Counter;