import * as React from "react"
import {render} from "react-dom"
import usePromise from "../index"


let n = 0
const p = ()=>{
    console.log("resolving")
    return new Promise(resolve=>setTimeout(()=>resolve(n++),1000))
}

function Root(){
    const {value,loading,loadValue} = usePromise(p)
    return <div>
        <span>{value}</span>
        <span>{loading?"...":""}</span>
        <button onClick={loadValue}>load</button>
    </div>
}

render(<Root />, document.querySelector("#root"))