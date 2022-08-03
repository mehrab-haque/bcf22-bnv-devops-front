import react, {useEffect} from 'react'
import {showToast} from "../App";

const Main=()=>{

    useEffect(()=>{
        showToast("Hello World")
        console.log("hi")
    },[])

    return(
        <div>
            Hello World
        </div>
    )
}

export default Main