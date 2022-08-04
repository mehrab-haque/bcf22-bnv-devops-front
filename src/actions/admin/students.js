import axios from "axios";
import {api_base_url} from "../../index";

export const fetchStudents=async token=>{
    try{
        var res=await axios.get(`${api_base_url}/admin/student/list`,{headers: {authorization: `Bearer ${token}`}})
        return res.data
    }catch(e){
        return null
    }
}

export const addStudent=async token=>{
    try{
        var res=await axios.post(`${api_base_url}/admin/student/add`,{
            name:'',
            gender:'',
            year:2022
        },{headers: {authorization: `Bearer ${token}`}})
        return res.data

    }catch(e){
        console.log(e)
        return null
    }
}


export const updateStudent=async(id,name,gender,year,token)=>{
    try{
        var res=await axios.put(`${api_base_url}/admin/student/update/${id}`,{
            name:name,
            gender:gender,
            year:year
        },{headers: {authorization: `Bearer ${token}`}})
        return true
    }catch(e){
        return null
    }
}