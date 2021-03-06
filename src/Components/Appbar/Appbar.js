import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Styles from './Appbar.module.css'
import Typography from "@material-ui/core/Typography";
import NavItem from "../NavItem/NavItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ToLightModeIcon from '@material-ui/icons/WbSunny';
import ToDarkModeIcon from '@material-ui/icons/Brightness3';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HideOnScroll from "../../Utils/HideOnScroll";

const Appbar = (props) => {
    return (
        <HideOnScroll {...props}>
            <AppBar elevation={0} color={"primary"} position={"sticky"}>
                <Toolbar className={Styles.Appbar}>
                    <header>
                        <Typography color={"inherit"} variant={"h3"}>P</Typography>
                    </header>
                    <section>
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

                    <div className={Styles.HamburgerIcon}>
                        <Tooltip style={{marginLeft:"8px",marginTop:"4px"}} title={"Switch theme mode"}>
                            <IconButton color={"inherit"} size={"small"}  onClick={props.drawerHandler}>
                                <MenuRoundedIcon fontSize={"large"} />
                            </IconButton>
                        </Tooltip>
                    </div>



                </Toolbar>
            </AppBar>
        </HideOnScroll>

    )
}

export default Appbar
