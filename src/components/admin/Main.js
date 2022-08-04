import react, {useEffect, useState} from 'react'
import {showToast} from "../../App";
import Dashboard from "./Dashboard";
import Auth from "./Auth";

const Main=()=>{

    const [isAuth,setAuth]=useState(false)

    const login=()=>{
        setAuth(true)
    }

    return(
        <div>
            {
                isAuth?(
                    <Dashboard/>
                ):(
                    <Auth login={login}/>
                )
            }
        </div>
    )
}

export default Main