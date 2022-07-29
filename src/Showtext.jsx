import React,{useReducer} from "react";
function Showtext() {
    const reducer = (state,action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count:state.count+1, showText: state.showText}
            case "toggleShowText":
                return {count:state.count, showText: !state.showText}
            default:
                return state
        }

    }
    
    const [state,dispatch] = useReducer(reducer,{count:0,showText:true});
    return(
        <div>
            <h4>{state.count}</h4>
            <br></br>
            <button onClick={()=>{
                    dispatch({type:"INCREMENT"});
                    dispatch({type:"toggleShowText"});
                }
            } className="Mybutton">Click Here</button>
            <br></br>
            <h4>{ state.showText && "This is a text"}</h4>
        </div>
    )
}

export default Showtext;