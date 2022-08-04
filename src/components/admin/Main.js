import react, {useEffect, useState} from 'react'
import {showToast} from "../../App";
import Dashboard from "./Dashboard";
import Auth from "./Auth";

var getToken

const Main=()=>{

    const [isAuth,setAuth]=useState(false)
    const [token,setToken]=useState(null)

    getToken=()=>{
        return token
    }

    const login=()=>{
        setAuth(true)
    }

    const logout=()=>{
        setAuth(false)
    }

    return(
        <div>
            {
                isAuth?(
                    <Dashboard logout={logout}/>
                ):(
                    <Auth login={login} setToken={setToken}/>
                )
            }
        </div>
    )
}

export default Main
export {getToken}