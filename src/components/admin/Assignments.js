import React, {useEffect, useState} from 'react'
import {fetchCourses} from "../../actions/admin/courses";
import {getToken} from "./Main";
import {fetchRegisteredStudents, fetchStudents, registerStudent} from "../../actions/admin/students";
import {Button, Grid, LinearProgress, MenuItem, Paper, Select} from "@mui/material";
import {showToast} from "../../App";
import students from "./Students";
import Typography from "@mui/material/Typography";

const Assignments= props=>{


    const [allCourses,setAllCourses]=useState(null)
    const [allStudents,setAllStudents]=useState(null)

    const [courseId,setCourseId]=useState(null)

    const loadInitialData=async ()=>{
        var res=await fetchCourses(getToken())
        setAllCourses(res)
        var res=await fetchStudents(getToken())
        setAllStudents(res)
    }

    useEffect(()=>{
        loadInitialData()
    },[])

    const [listLoading,setListLoading]=useState(false)
    const [listLoaded,setListLoaded]=useState(false)

    const handleCourseSelect=async event=>{
        setListLoading(true)
        setCourseId(event.target.value)
        var res=await fetchRegisteredStudents(event.target.value,getToken())
        if(res===null){
            showToast("Error occurred")
        }
        else{
            var arr=res.map(r=>r.id)
            var newArr=[]
            allStudents.map(s=>{
                if(arr.indexOf(s.id)===-1)
                    newArr.push({
                        ...s,
                        isRegistered:false
                    })
                else
                    newArr.push({
                        ...s,
                        isRegistered:true
                    })
            })
            setAllStudents(newArr)
            setListLoaded(true)
        }
        setListLoading(false)
    }

    if(allCourses===null || allStudents===null)
        return <LinearProgress/>
    else
        return(
            <Grid container spacing={1}>
               <Grid item xs={12} md={4}>
                   <Select
                       fullWidth
                       id="demo-simple-select"
                       labelId="demo-simple-select-label"
                       label="Select Course"
                       onChange={handleCourseSelect}
                   >
                       {
                           allCourses.map(c=>{
                               return(
                                   <MenuItem value={c.id}>{c.name}</MenuItem>
                               )
                           })
                       }
                   </Select>
               </Grid>
                <Grid item xs={0} md={8}/>
                {
                    listLoading?(
                        <Grid item xs={12}>
                            <LinearProgress/>

                        </Grid>
                    ):(
                        <div/>
                    )
                }
                {
                    listLoaded && allStudents.length>0 && 'isRegistered' in allStudents[0]?(
                        allStudents.map(s=>{
                            return(
                                <Grid item xs={12} md={4}>
                                    <Paper style={{padding:'10px'}}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12}>
                                                <Typography variant={'body'}>
                                                    Student Id : {s.id}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant={'body'}>
                                                    Student Name : {s.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {
                                                    s.isRegistered?(
                                                        <Button
                                                            fullWidth
                                                            disabled

                                                            variant={'outlined'}
                                                            >
                                                            Already Registered
                                                        </Button>
                                                    ):(
                                                        <Button
                                                            fullWidth

                                                            onClick={async ()=>{
                                                                console.log('hiiii')
                                                                var res= await registerStudent(s.id,courseId,getToken())
                                                                console.log(res)
                                                                if(res===null)
                                                                    showToast('Cannot register')
                                                                else{
                                                                    var arr=[]
                                                                    allStudents.map(s1=>{
                                                                        console.log(s1)
                                                                        if(s1.id===s.id)
                                                                            arr.push({
                                                                                ...s1,
                                                                                isRegistered:true
                                                                            })
                                                                        else
                                                                            arr.push(s1)
                                                                        setAllStudents(arr)
                                                                    })
                                                                }
                                                            }}
                                                            color={'primary'}
                                                            variant={'outlined'}
                                                        >
                                                            Register Now
                                                        </Button>
                                                    )
                                                }
                                            </Grid>

                                        </Grid>
                                    </Paper>
                                </Grid>
                            )
                        })
                    ):(
                        <div/>
                    )
                }
            </Grid>
        )
}

export default Assignments