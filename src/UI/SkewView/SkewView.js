import React, {useEffect, useState} from 'react'
import Styles from './SkewView.module.css'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
const SkewView = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    const dark = localStorage.getItem('theme')
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: darkMode? "rgba(33, 33, 33, 1)": "rgba(240, 240, 240, 1)",
        },

    }))
    const classes = useStyles()

    useEffect(()=>{
        if(dark){
            setDarkMode(JSON.parse(dark).value)
        }
    },[dark])
    return(
        <div className={Styles.SkewView+" "+ classes.root}>
            <Typography variant={"h4"}>{props.title}</Typography>
            {props.children}
        </div>
    )
}

export default SkewView
