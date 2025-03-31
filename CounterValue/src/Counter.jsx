import { useState } from "react";
let Count = ()=>{
    let [count, setCount] = useState(0);
    let increseCounter =()=>{
        setCount(count+1)
    }
    return(<>
        <h1>Counter Value is : {count}</h1>
        <input type="button" name="Increse Counter" value="Increse" onClick={increseCounter}></input>
    </>)
}
export default Count