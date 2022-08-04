import axios from "axios";
import {api_base_url} from "../../index";

export const fetchCourses=async token=>{
    try{
        var res=await axios.get(`${api_base_url}/admin/course/list`,{headers: {authorization: `Bearer ${token}`}})
        return res.data
    }catch(e){
        return null
    }
}

export const addCourse=async token=>{
    try{
        var res=await axios.post(`${api_base_url}/admin/course/add`,{
            name:'',
            description:''
        },{headers: {authorization: `Bearer ${token}`}})
        return res.data

    }catch(e){
        console.log(e)
        return null
    }
}

export const deleteCourse=async (id,token)=>{
    try{
        var res=await axios.delete(`${api_base_url}/admin/course/delete/${id}`,{headers: {authorization: `Bearer ${token}`}})
        return true
    }catch(e){
        return null
    }
}

export const updateCourse=async(id,name,description,token)=>{
    try{
        var res=await axios.put(`${api_base_url}/admin/course/update/${id}`,{
            name:name,
            description:description
        },{headers: {authorization: `Bearer ${token}`}})
        return true
    }catch(e){
        return null
    }
}