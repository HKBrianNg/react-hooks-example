import React,{useState} from "react";

function Father() {
    var [name, setName] = useState("");
    const personData = [
        {   
            name:"Brian",
            fathername:"伍启材"
        },
        {   
            name:"Diana",
            fathername:"林树立"
        },
        {
            name:"Anson",
            fathername:"Brian"
        }


    ];
    function isFather(person) {
        return person.name === name;
    }
    const father = personData.find(isFather)
    
    const myName = (e) => {
        setName(e.target.value);
    };

    return(
        <div>
            <h4>my name is: {name}</h4>
            <h4>My father's name is {father ? father.fathername : "record not found"}</h4>
            <input placeholder="pls enter your name" onChange={myName} className="myName" />
        </div>
    )
}

export default Father;