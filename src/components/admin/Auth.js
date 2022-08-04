import React, {useRef, useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    LinearProgress,
    TextField
} from "@mui/material";
import {showToast} from "../../App";
import {login} from "../../actions/admin/auth";

const Auth=props=>{

    const loginRef=useRef();
    const passRef=useRef();

    const [loading,setLoading]=useState(false)

    const loginClick=async ()=>{
        setLoading(true)
        var loginString=loginRef.current.value.trim()
        var passString=passRef.current.value.trim()
        if(loginString.length===0)
            showToast("Login cannot be empty")
        else if(passString.length===0)
            showToast("Password cannot be empty")
        else{
            var res=await login(loginString,passString)
            if(res===null)
                showToast("Invalid credentials")
            else{
                showToast("Logged in successfully")
                props.setToken(res.access_token)
                props.login()
            }
            setLoading(false)
        }
    }


    return(
        <div>
            <Dialog open={true}>
                {
                    loading?(
                        <LinearProgress/>
                    ):(
                        <div/>
                    )
                }
                <DialogTitle>
                    Admin Login
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={loginRef}
                                fullWidth
                                variant={'outlined'}
                                label={'Login'}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputRef={passRef}
                                fullWidth
                                type={'password'}
                                variant={'outlined'}
                                label={'Password'}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        color={'primary'}
                        onClick={loginClick}
                        disabled={loading}
                        >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div
    )
}

export default Auth