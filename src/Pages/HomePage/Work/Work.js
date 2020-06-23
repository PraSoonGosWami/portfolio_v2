import React, {useEffect, useState} from 'react'
import Styles from './Work.module.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {useHistory} from "react-router";
import ProjectsShowcase from "./ProjectsShowcase/ProjectsShowcase";

import AxiosInstance from '../../../Utils/AxiosInstance'
import ProgressBar from "../../../UI/ProgressBar/ProgressBar";


const Work = (props) => {
    const history = useHistory()
    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(false)

    const getProducts = () => {
        setLoading(true)
        AxiosInstance.get('/showcase.json')
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => {})
            .finally(()=> setLoading(false))
    }

    useEffect(()=>{
        getProducts()
    },[])
    return(
        <Container maxWidth={"lg"} className={Styles.Work}>
            <Typography variant={"h4"}>Featured work</Typography>
            {!loading && projects && <ProjectsShowcase data={projects}/>}
            <Button color={"secondary"} onClick={()=>history.push('/work')} variant={"outlined"} endIcon={<ArrowRightAltIcon/>}>
                View all
            </Button>
            {loading && <ProgressBar/>}
        </Container>
    )
}

export default Work
