import React from "react";
// import {useState} from "react";  
import PropItUp from "./components/PropItUp";
function App() {
  // const [age,setAge] = useState();
  return (
    <>

    <PropItUp firstName={"Gesmir"} lastName={"Shyti"} initialAge={21} hairColor={"Black"} />
    </>
  );
}
export default App;