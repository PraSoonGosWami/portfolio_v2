import React, {useState} from 'react'
import Styles from './Introduction.module.css'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import AxiosInstance from '../../../Utils/AxiosInstance'
import CircularProgress from "@material-ui/core/CircularProgress";
const Introduction = (props) => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const contactButtonHandler = () => {
        history.push('/contact')
    }

    const cvButtonHandler = () => {
        setLoading(true)
        AxiosInstance.get('/cv.json')
            .then(res=>{
                window.open(res.data, "_blank")
            })
            .catch(err => {
                window.alert("Something went wrong. Cannot fetch download URL")
            })
            .finally(()=>setLoading(false))

    }
    return (
        <Container maxWidth={"md"} className={Styles.Introduction}>
            <Typography variant={"h3"}>Hi, I'm Prasoon Goswami</Typography>
            <Typography color={"textSecondary"} variant={"h6"}>B.tech in Information technology, a
                self-taught Full Stack JavaScript Developer and Hybrid Mobile Application Developer. Have worked with Flutter, Ionic and Cloud
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
                    {loading ? <CircularProgress size={20} color={"inherit"}/>: "Download CV"}
                </Button>

            </section>
        </Container>
    )
}

export default Introduction