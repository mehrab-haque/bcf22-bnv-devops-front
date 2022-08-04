import React, {useEffect, useRef, useState} from 'react'
import {Button, Grid, LinearProgress, MenuItem, Paper, Select, TextField} from "@mui/material";
import {getToken} from "./Main";
import {showToast} from "../../App";
import Typography from "@mui/material/Typography";
import {addStudent, deleteStudent, fetchStudents, updateStudent} from "../../actions/admin/students";

const Students= props=>{

    const [loading,setLoading]=useState(false)
    const [initialLoading,setInitialLoading]=useState(true)

    const [students,setStudents]=useState([])

    const fetchAllStudents=async ()=>{
        var res=await fetchStudents(getToken())
        console.log(res)
        if(res===null)
            showToast("Access denied")
        else
            setStudents(res)
        setInitialLoading(false)
    }

    const addStudentClick=async ()=>{
        setLoading(true)
        var res=await addStudent(getToken())
        if(res===null)
            showToast("Access denied")
        else{
            setStudents([{
                id:res.id,
                name:' ',
                description:' '
            },...students])
        }
        setLoading(false)
    }

    const deleteStudent=id=>{
        var arr=[]
        students.map(c=>{
            if(c.id!==id)
                arr.push(c)
        })
        setStudents([...arr])

    }

    const updateStudent=(id,content)=>{
        var arr=[]
        students.map(c=>{
            if(c.id!==id)
                arr.push(c)
            else{
                arr.push(content)
            }
        })
        setStudents([...arr])
    }

    useEffect(()=>{
        fetchAllStudents()
    },[])

    return(
        <Grid container spacing={1}>
            {
                initialLoading?(
                    <Grid item xs={12} >
                        <LinearProgress/>

                    </Grid>

                ):(
                    <>
                        <Grid item xs={12} md={3}>
                            <Button
                                fullWidth
                                disabled={loading}
                                variant={'outlined'}
                                color={'primary'}
                                onClick={addStudentClick}
                            >
                                Add Student
                            </Button>
                        </Grid>
                        <Grid item xs={0} md={9}/>

                        {
                            students.map(c=>{
                                return(
                                    <Grid item xs={12} md={4}>
                                        <Student update={updateStudent} delete={deleteStudent} key={c.id} student={c}/>
                                    </Grid>
                                )
                            })
                        }
                    </>
                )
            }


        </Grid>
    )
}

const Student=props=>{

    const nameRef=useRef()
    const genderRef=useRef()
    const yearRef=useRef()

    const [loading,setLoading]=useState(false)


    const saveClick=async ()=>{
        setLoading(true)
        var year=2022
        try{
            year=parseInt(yearRef.current.value)
        }catch(e){}
        var res=await updateStudent(props.student.id,nameRef.current.value,genderRef.current.value,year,getToken())
        if(res===null){
            showToast("Cannot update student")
        }else{
            showToast("Student updated successfully")
            props.update(props.student.id,{
                id:props.student.id,
                name:nameRef.current.value,
                gender:genderRef.current.value,
                yearRef:year
            })
        }
        setLoading(false)
    }

    return(
        <Paper style={{padding:'10px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>
                        Student ID : {props.student.id}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={nameRef}
                        fullWidth
                        defaultValue={props.student.name}
                        variant={'outlined'}
                        label={'Student Name'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Select
                        fullWidth
                        inputRef={genderRef}
                        defaultValue={props.student.gender}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"

                    >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        inputRef={yearRef}
                        fullWidth
                        type={'number'}
                        defaultValue={props.student.year}
                        variant={'outlined'}
                        label={'Year'}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        onClick={saveClick}
                        disabled={loading}
                        color={'success'}
                        variant={'outlined'}
                        fullWidth>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Students