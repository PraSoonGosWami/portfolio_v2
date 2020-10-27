import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Styles from './Services.module.css'
const Services = (props) => {
    return(
        <Container maxWidth={"lg"} className={Styles.Features}>
            <Typography variant={"h4"}>Services</Typography>
            <div className={Styles.FeaturesList}>
                <ul>
                    <li>Static and dynamic websites</li>
                    <li>Full stack development with MERN stack</li>
                    <li>Native android apps</li>
                    <li>Hybrid mobile apps</li>
                    <li>Google analytics</li>
                </ul>

                <ul>
                    <li>Fully responsive design</li>
                    <li>Mobile first design</li>
                    <li>Modular approach</li>
                    <li>Material design</li>
                    <li>SEO and optimisation</li>

                </ul>
            </div>
        </Container>
    )
}

export default Services
