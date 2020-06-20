import React from 'react'
import Styles from './Work.module.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {useHistory} from "react-router";
import ProjectsShowcase from "./ProjectsShowcase/ProjectsShowcase";
const Work = (props) => {
    const history = useHistory()
    return(
        <Container maxWidth={"lg"} className={Styles.Work}>
            <Typography variant={"h4"}>Featured work</Typography>
            <ProjectsShowcase/>
            <Button color={"secondary"} onClick={()=>history.push('/work')} variant={"outlined"} endIcon={<ArrowRightAltIcon/>}>
                View all
            </Button>
        </Container>
    )
}

export default Work
