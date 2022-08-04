import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import ForumIcon from '@mui/icons-material/Forum';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Courses from "./Courses";

const drawerWidth = 240;

var showCart

const Dashboard=props=>{
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [menu,setMenu]=useState(0)

    const drawer = (
        <div>
            <Toolbar />

            <List>
                <Divider />
                <ListItem button selected={menu===1} onClick={()=>{setMenu(1)}}>
                    <ListItemIcon>
                        <ForumIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Courses'} />
                </ListItem>
                <ListItem button selected={menu===2} onClick={()=>{setMenu(2)}}>
                    <ListItemIcon>
                        <LocationCityIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Students'} />
                </ListItem>
                <Divider />
                <ListItem button selected={menu===3} onClick={()=>{setMenu(3)}}>
                    <ListItemIcon>
                        <AddAlertIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Courses Assignment'} />
                </ListItem>
                <Divider />
                <ListItem button selected={menu===4} onClick={()=>{setMenu(4)}}>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Result'} />
                </ListItem>
                <Divider />
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{backgroundColor:'#666666'}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Dashboard
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        sx={{marginLeft:'auto'}}
                        onClick={props.logout}
                    >
                        <ExitToAppIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                {
                    menu===1?(
                        <Courses/>
                    ):(
                        <div/>
                    )
                }




            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard
export {showCart}