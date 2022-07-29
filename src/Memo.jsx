import React,{useEffect, useState, useMemo} from "react";
import axios from "axios";
function Memo() {
    const [data,setData] = useState(null);
    const [toggle,setToggle] =useState(false);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data);
        });
    },[]);

    const findLongestName = (comments)=> {
        if (!comments) return null;
        let longestName = "";
        for (let i=0;i< comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        
        console.log("This was computed");
        return longestName;
    };

    const getLongestName = useMemo(()=>findLongestName(data),[data]);

    return (
        <div>
            <h4>Find the Longest Comment</h4>
            {getLongestName}
            <br></br>
            <button onClick={()=>{setToggle(!toggle)}} className="toggleButton">
                Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    )
}

export default Memo;