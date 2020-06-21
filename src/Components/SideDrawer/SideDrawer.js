import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import NavItem from "../NavItem/NavItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ToLightModeIcon from "@material-ui/icons/WbSunny";
import ToDarkModeIcon from "@material-ui/icons/Brightness3";
import Styles from './SideDrawer.module.css'
const SideDrawer = (props) => {
    return(
        <Drawer
            anchor={"right"}
            variant={"temporary"}
            open={props.drawer}
            onClose={props.drawerHandler}>
            <section className={Styles.SideDrawer} onClick={props.drawerHandler}>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/about'}>About</NavItem>
                <NavItem to={'/work'}>Work</NavItem>
                <NavItem to={'/contact'}>Contact</NavItem>
                <Tooltip style={{marginLeft:"20px",marginTop:"4px"}} title={"Switch theme mode"}>
                    <IconButton  color="inherit" onClick={props.handleChange}>
                        {props.checked ? <ToLightModeIcon /> : <ToDarkModeIcon />}
                    </IconButton>
                </Tooltip>

            </section>
        </Drawer>
    )
}

export default SideDrawer
