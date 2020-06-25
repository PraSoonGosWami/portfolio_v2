import React from 'react'
import Styles from './AboutPage.module.css'
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {Link} from "@material-ui/core"
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MyImg from '../../Assets/me.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGooglePlay, faInstagram, faLinkedinIn, faYoutube, faFacebook} from "@fortawesome/free-brands-svg-icons";

const AboutPage = (props) => {
    const mapLink = "https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5897112,88.3793114,11.65z/data=!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895"
    return (
        <Container maxWidth={"lg"} className={Styles.AboutPage}>
            <Typography variant={"h4"}>About me</Typography>
            <div className={Styles.AboutPageContainer}>
                <main>
                    <Typography>I'm Prasoon Goswami, B.Tech in Information Technolgy from <Link
                        href={"https://heritageit.edu/"} target={"_blank"} color={"secondary"}>Heritage Institute of
                        Technology, Kolkata</Link>. I'm a self taught <strong>Full stack web and android
                        developer</strong>.</Typography>
                    <br/>
                    <Typography>I build small and medium web applications using React, custom plugins, features,
                        animations, and coding interactive layouts. I also have experience with Android Native app
                        development and backend development with NodeJs, MongoDB and Firebase</Typography>
                    <br/>
                    <Typography>You can find more about my projects, publications and skills on <Link
                        href={"https://www.linkedin.com/in/prosoon-goswami/"} target={"_blank"}
                        color={"secondary"}>LinkedIn</Link></Typography>
                    <br/>
                    <Typography>For any queries feel free to contact me at:</Typography>
                    <div>
                        <MailOutlineIcon color={"secondary"}/>
                        <Link color={"secondary"} href={"mailto:prasoon.me.x@gmail.com"}>prasoon.me.x@gmail.com</Link>
                    </div>
                    <div>
                        <PhoneIcon color={"secondary"}/>
                        <Link color={"secondary"} href={"tel:+918420090038"}>+91 8420090038</Link>
                    </div>
                    <div>
                        <LocationOnIcon color={"secondary"}/>
                        <Link color={"secondary"} target={'_blank'} href={mapLink}>Kolkata, West Bengal, INDIA</Link>
                    </div>

                </main>
                <Link underline={"none"} href={"https://www.instagram.com/prasoon_goswami/"} target={"_blank"}>
                    <img src={MyImg} alt={"Prasoon Goswmai"}/>
                </Link>
            </div>
            <Typography variant={"h5"}>Or somewhere else on the web</Typography>

            <Container maxWidth={"md"} className={Styles.AboutPageSocial}>

                <Link underline={"none"} color={"inherit"} href="https://github.com/PraSoonGosWami" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                    <Typography variant={"h6"}>Github</Typography>
                </Link>
                <Link style={{paddingLeft:"3px"}} underline={"none"} color={"inherit"} href="https://www.linkedin.com/in/prosoon-goswami/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                    <Typography variant={"h6"}>LinkedIn</Typography>
                </Link>
                <Link underline={"none"} color={"inherit"} href="https://play.google.com/store/apps/developer?id=DynoPie&hl=en" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGooglePlay} size="2x"/>
                    <Typography variant={"h6"}>Play Store</Typography>
                </Link>
                <Link underline={"none"} color={"inherit"} href="https://www.youtube.com/channel/UCqvFDpxC-Tavqn8LCVcZqEg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                    <Typography variant={"h6"}>YouTube</Typography>
                </Link>
                <Link underline={"none"} color={"inherit"} href="https://www.instagram.com/prasoon_goswami/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    <Typography variant={"h6"}>Instagram</Typography>
                </Link>
                <Link underline={"none"} color={"inherit"} href="https://www.facebook.com/prasoon.goswami4/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    <Typography variant={"h6"}>Facebook</Typography>
                </Link>

            </Container>

        </Container>
    )
}

export default AboutPage
