import React from 'react'
import Styles from './NavItem.module.css'
import {NavLink} from "react-router-dom";
const NavItem = (props) => {
    return(
        <div className={Styles.NavItem}>
            <NavLink exact to={props.to} activeClassName={Styles.active}>
                {props.children}
            </NavLink>
        </div>
    )
}

export default NavItem
