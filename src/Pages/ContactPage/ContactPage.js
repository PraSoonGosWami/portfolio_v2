import React, {useEffect, useState} from 'react'
import Styles from './ContactPage.module.css'
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Link} from "@material-ui/core";
import AxiosInstance from '../../Utils/AxiosInstance'
import CircularProgress from "@material-ui/core/CircularProgress";
import {useAlert} from "@prasoongoswami/react_snackbar";

const ContactPage = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const {addAlert} = useAlert()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const formEventHandler = (event) => {
        event.preventDefault()
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            return addAlert(
                {
                    title: "Input error",
                    message: "Some field are empty!",
                    duration: 5000
                })
        }
        setLoading(true)
        const data = {name, message, email}
        AxiosInstance.post(`/messages/${email.replace(".", "")}.json`, data)
            .then(res => {
                setName("")
                setEmail("")
                setMessage("")
                addAlert({message:"Prasoon has received your message and will get back to you soon!", title:"Success", severity: "success", duration:5000})
            })
            .catch(err => {
                addAlert({message:err.message,duration:5000})
            })
            .finally(() => setLoading(false))
    }
    return (
        <div className={Styles.ContactPage}>
            <section>
                <iframe width="100%" height="100%" title={"Maps BG"}
                        src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Kolkata+(Prasoon%20Goswami)&amp;ie=UTF8&amp;t=p&amp;z=14&amp;iwloc=B&amp;output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
            </section>
            <Container maxWidth={"lg"} className={Styles.ContactPageContainer}>
                <Card elevation={4} className={Styles.ContactPageCard}>
                    <Typography>Drop me a message...</Typography>
                    <form onSubmit={(event => formEventHandler(event))}>
                        <TextField
                            variant={"outlined"}
                            color={"secondary"}
                            size={"small"} type={"name"}
                            required value={name}
                            onChange={event => setName(event.target.value)}
                            fullWidth label={"Your name"}/>
                        <TextField
                            variant={"outlined"}
                            color={"secondary"}
                            size={"small"} type={"email"}
                            required value={email}
                            onChange={event => setEmail(event.target.value)}
                            fullWidth label={"Your email"}/>
                        <TextField
                            variant={"outlined"}
                            size={"small"}
                            multiline
                            color={"secondary"}
                            rows={4} required value={message}
                            onChange={event => setMessage(event.target.value)}
                            fullWidth label={"Your message"}/>
                        <Button type={"submit"} variant={"contained"} color={"secondary"} fullWidth>
                            {loading ? <CircularProgress color={"inherit"} size={22}/> : "Send"}
                        </Button>
                    </form>
                    <h6> or</h6>
                    <Divider/>
                    <Link underline={"hover"} href={"mailto:prasoon.me.x@gmail.com"} color={"textPrimary"}>Email:
                        prasoon.me.x@gmail.com</Link>
                </Card>
            </Container>
        </div>
    )
}

export default ContactPage
