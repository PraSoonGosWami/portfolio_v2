import React, {useEffect, useState} from 'react'
import Styles from './WorkCard.module.css'
import Typography from "@material-ui/core/Typography";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";

const WorkCard = (props) => {
    const theme = useTheme()
    const [darkMode, setDarkMode] = useState(false)
    const [raised, setRaised] = useState(false)
    const useStyles = makeStyles((theme) => ({
        card: {
            backgroundColor: darkMode ? "rgba(33, 33, 33, 1)" : "rgba(240, 240, 240, 1)",
            margin: "10px",
            cursor: "pointer",
        }

    }))
    const classes = useStyles()

    useEffect(() => {
        if (theme) {
            if (theme.palette.type === "light")
                setDarkMode(false)
            else
                setDarkMode(true)
        }

    }, [theme])


    return (
        <div className={Styles.WorkCardDiv}  onMouseOver={() => setRaised(true)}
             onMouseOut={() => setRaised(false)}>
            <Card className={classes.card + " " + Styles.WorkCard} raised={raised}>
                <Typography variant={"h6"}>{props.title}</Typography>
                <img src={props.img}/>
                <Typography>{props.stack}</Typography>
                <Typography>{props.summary}</Typography>
                <Button
                    onClick={props.onClick}
                    color={"secondary"}
                    variant={"text"}
                    size={"small"}
                    endIcon={<ArrowRightAltIcon/>}
                >
                    Learn more
                </Button>
            </Card>
        </div>

    )
}

export default WorkCard
