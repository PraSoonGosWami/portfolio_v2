import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import Style from './ProgressBar.module.css'
const ProgressBar = (props) => {
    return(
        <div className={Style.ProgressBar}>
            <CircularProgress color="inherit"/>
        </div>
    )
}

export default ProgressBar