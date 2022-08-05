import React, {useEffect, useState} from 'react'
import {fetchCourses} from "../../actions/admin/courses";
import {getToken} from "./Main";
import {fetchRegisteredStudents, fetchStudents, registerStudent} from "../../actions/admin/students";
import {Button, Grid, LinearProgress, MenuItem, Paper, Select} from "@mui/material";
import {showToast} from "../../App";
import students from "./Students";
import Typography from "@mui/material/Typography";

const Results= props=>{


    const [allStudents,setAllStudents]=useState(null)


    const loadInitialData=async ()=>{

        var res=await fetchStudents(getToken())

        setAllStudents(res)
        console.log(res)

    }

    useEffect(()=>{
        console.log('heloooo')
        loadInitialData()
    },[])




    if(allStudents===null)
        return <LinearProgress/>
    else
        return(
            <Grid container spacing={1}>
                {
                    allStudents.map(s=>{
                        console.log(s)
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
                                        <Grid item xs={6}>
                                            <Button variant={'outlined'} color={'success'}>
                                                Pass
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button variant={'outlined'} color={'error'}>
                                                Fail
                                            </Button>
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
}

export default Results