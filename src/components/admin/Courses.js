import React, {useEffect, useRef, useState} from 'react'
import {Button, Grid, Paper, TextField} from "@mui/material";
import {addCourse, deleteCourse, fetchCourses, updateCourse} from "../../actions/admin/courses";
import {getToken} from "./Main";
import {showToast} from "../../App";
import Typography from "@mui/material/Typography";

const Courses= props=>{

    const [loading,setLoading]=useState(false)

    const [courses,setCourses]=useState([])

    const fetchAllCourses=async ()=>{
        setLoading(true)
        var res=await fetchCourses(getToken())
        console.log(res)
        if(res===null)
            showToast("Access denied")
        else
            setCourses(res)
        setLoading(false)
    }

    const addCourseClick=async ()=>{
        setLoading(true)
        var res=await addCourse(getToken())
        if(res===null)
            showToast("Access denied")
        else{
            setCourses([{
                id:res.id,
                name:' ',
                description:' '
            },...courses])
        }
        setLoading(false)
    }

    const deleteCourse=id=>{
        var arr=[]
        courses.map(c=>{
            if(c.id!==id)
                arr.push(c)
        })
        setCourses([...arr])

    }

    const updateCourse=(id,content)=>{
        var arr=[]
        courses.map(c=>{
            if(c.id!==id)
                arr.push(c)
            else{
                arr.push(content)
            }
        })
        setCourses([...arr])
    }

    useEffect(()=>{
        fetchAllCourses()
    },[])

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
                <Button
                    fullWidth
                    disabled={loading}
                    variant={'outlined'}
                    color={'primary'}
                    onClick={addCourseClick}
                    >
                    Add Course
                </Button>
            </Grid>
            <Grid item xs={0} md={9}/>

            {
                courses.map(c=>{
                    return(
                        <Grid item xs={12} md={4}>
                            <Course update={updateCourse} delete={deleteCourse} key={c.id} course={c}/>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

const Course=props=>{

    const nameRef=useRef()
    const descRef=useRef()

    const [loading,setLoading]=useState(false)

    const deleteClick=async ()=>{
        setLoading(true)
        var res=await deleteCourse(props.course.id,getToken())
        if(res===null){
            showToast("Cannot delete course")
        }else{
            showToast('Course deleted successfully')
            props.delete(props.course.id)
        }
        setLoading(false)
    }

    const saveClick=async ()=>{
        setLoading(true)
        var res=await updateCourse(props.course.id,nameRef.current.value,descRef.current.value,getToken())
        if(res===null){
            showToast("Cannot update course")
        }else{
            showToast("Course updated successfully")
            props.update(props.course.id,{
                id:props.course.id,
                name:nameRef.current.value,
                description:descRef.current.value
            })
        }
        setLoading(false)
    }

    return(
        <Paper style={{padding:'10px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>
                        Course ID : {props.course.id}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={nameRef}
                        fullWidth
                        defaultValue={props.course.name}
                        variant={'outlined'}
                        label={'Course Name'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={descRef}
                        defaultValue={props.course.description}
                        fullWidth
                        multiline
                        rows={4}
                        variant={'outlined'}
                        label={'Course Description'}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        disabled={loading}
                        color={'error'}

                        onClick={deleteClick}
                        variant={'outlined'}
                        fullWidth>
                        Delete
                    </Button>
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

export default Courses