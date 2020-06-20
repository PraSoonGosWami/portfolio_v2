import React, {useEffect, useState} from 'react'
import Card from "@material-ui/core/Card";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const DisplayCards = (props) => {
    const theme = useTheme()
    const [darkMode, setDarkMode] = useState(false)
    const [raised, setRaised] = useState(false)
    const useStyles = makeStyles((theme) => ({
        card: {
            backgroundColor: darkMode? "rgba(33, 33, 33, 1)": "rgba(252, 252, 252, 1)",
            margin: "10px",
            cursor: "pointer",
        }

    }))
    const classes = useStyles()

    useEffect(()=>{
        if(theme){
            if(theme.palette.type==="light")
                setDarkMode(false)
            else
                setDarkMode(true)
        }

    },[theme])

    return(
        <div onMouseOver={()=> setRaised(true)} onMouseOut={()=>setRaised(false)}>
            <Card className={classes.card} raised={raised}>
                {props.children}
            </Card>
        </div>

    )
}

export default DisplayCards
