import React, {useEffect, useState} from 'react'
import Styles from './Work.module.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {useHistory} from "react-router";
import ProjectsShowcase from "./ProjectsShowcase/ProjectsShowcase";
import C2s from "../../../Assets/bidkart.jpg";
import Shopperscart from "../../../Assets/CovidZonesIMG.jpg";
import Portfolio from "../../../Assets/PortIMG.jpg";
const Work = (props) => {
    const history = useHistory()
    const [projects, setProjects] = useState(null)

    const getProducts = () => {
        setProjects([
            {
                id: "p001",
                name: "Click2Short",
                img : C2s,
                details: "Click2Short is an Url shortening service like bitly and short url",
                stack: "Express | NodeJs | ReactJs | MongoDb",
                url:"https://c2s.prasoon.me/",
                git:"https://github.com/PraSoonGosWami/click2short"
            },
            {
                id: "p002",
                name: "Shopper's Cart",
                img : Shopperscart,
                details: "An e-commerce web app clone with PWA, similar to Flipkart and Amazon",
                stack: "HTML5 | CSS3 | ReactJs | Firebase",
                url:"https://shopperscart.tiddler.tech/",
                git:"https://github.com/PraSoonGosWami/ShoppersCart"
            },
            {
                id: "p003",
                name: "Prasoon | Portfolio",
                img : Portfolio,
                details: "This is my portfolio website displaying my skills sets and latest projects",
                stack: "ReactJs | Firebase | Responsive Design",
                url:"https://prasoon.me",
                git:"https://github.com/PraSoonGosWami/Portfolio"
            }])
    }

    useEffect(()=>{
        getProducts()
    },[])
    return(
        <Container maxWidth={"lg"} className={Styles.Work}>
            <Typography variant={"h4"}>Featured work</Typography>
            <ProjectsShowcase data={projects}/>
            <Button color={"secondary"} onClick={()=>history.push('/work')} variant={"outlined"} endIcon={<ArrowRightAltIcon/>}>
                View all
            </Button>
        </Container>
    )
}

export default Work
