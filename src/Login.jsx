import React,{useContext} from "react";
import { AppContext } from "./App";


function Login() {
    const {setUsername} = useContext(AppContext); 
    return (
        <div>
            <input placeholder="input your name" onChange={(e)=>setUsername(e.target.value)} className="inputText" />
        </div>
    )
}

export default Login;