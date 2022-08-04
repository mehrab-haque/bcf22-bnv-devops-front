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

const Auth=props=>{

    const loginRef=useRef();
    const passRef=useRef();

    const [loading,setLoading]=useState(false)

    const loginClick=()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            props.login()
        }, 2000);
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
        </div>
    )
}

export default Auth