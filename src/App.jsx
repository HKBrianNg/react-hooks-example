import React,{useState,createContext} from "react";
import Counter from "./Counter.jsx";
import Father from "./Father.jsx";
import Login from "./Login.jsx";
import User from "./User.jsx";
import Showtext from "./Showtext.jsx";
import Changename from "./Changename.jsx";
import Logger from "./Logger.jsx";
import Memo from "./Memo.jsx";

export const AppContext = createContext(null);

function App() {   
  const [username, setUsername] =useState("");
  return (
    <div className="APPWrapper">
        <h1>Exercise 1 -useState() & useEffect() Hook</h1>
          <Counter/>
          <hr></hr>
        <h1>Exercise 2 - useState() Hook & Search of Array of objects</h1>
          <Father />
          <hr></hr>
        <h1>Exercise 3 - useContext() Hook</h1>
          <AppContext.Provider value={{username,setUsername}}>
            <Login /> <User />
          </AppContext.Provider> */}
        <h1>Exerciese 4 - Reducer Hook</h1>
          <Showtext /> */}
        <h1>Exerciese 5 - useRef Hook</h1>
          <Changename />
        <h1>Exerciese 6 - useLayoutEffect Hook</h1>
          <Logger />
        <h1>Exercise 7 - Memo Hook & Axios</h1>
          <Memo />
    </div>
  );
}

export default App;