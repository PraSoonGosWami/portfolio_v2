import React from 'react'
import Styles from './Introduction.module.css'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";

const Introduction = (props) => {
    const history = useHistory()
    const contactButtonHandler = () => {
        history.push('/contact')
    }

    const cvButtonHandler = () => {

    }
    return (
        <Container maxWidth={"md"} className={Styles.Introduction}>
            <Typography variant={"h3"}>Hi, I'm Prasoon Goswami</Typography>
            <Typography color={"textSecondary"} variant={"h6"}>Currently doing B.tech in Information technology, a
                self-taught Full Stack JavaScript Developer and Android (Native) Developer. Have worked on IoT and Cloud
                computing. I love open source and building side projects. </Typography>
            <section>
                <Button
                    color={"secondary"}
                    variant={"contained"}
                    onClick={()=>contactButtonHandler()}
                    size={"large"}>
                    Contact me
                </Button>
                <Button
                    color={"secondary"}
                    variant={"outlined"}
                    onClick={()=>cvButtonHandler()}
                    size={"large"}>
                    Download CV
                </Button>

            </section>
        </Container>
    )
}

export default Introduction