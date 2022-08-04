import axios from "axios";
import {api_base_url} from "../../index";

export const login=async (loginString,passString)=>{
    try{
        var res=await axios.post(`${api_base_url}/admin/login`,{
            login:loginString,
            password:passString
        })
        return res.data
    }catch(e){
        return null
    }

}