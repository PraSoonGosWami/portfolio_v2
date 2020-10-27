import React from 'react'
import Styles from './AppFooter.module.css'
import Typography from "@material-ui/core/Typography";
import NavItem from "../NavItem/NavItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
const AppFooter = (props) => {
    return(
        <div className={Styles.AppFooter}>
            <header>
                <Typography variant={"h1"}>P</Typography>
                <Typography variant={"h6"}>Prasoon | Portfolio</Typography>

            </header>
            <div className={Styles.AppFooterNav}>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/about'}>About</NavItem>
                <NavItem to={'/work'}>Work</NavItem>
                <NavItem to={'/contact'}>Contact</NavItem>
            </div>
            <div className={Styles.AppFooterSocial}>
                <Typography variant={"h6"}>Follow me on</Typography>
                <section>
                    <a href="https://github.com/PraSoonGosWami" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                    <a href="https://www.linkedin.com/in/prosoon-goswami/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
                    </a>
                    <a href="https://twitter.com/PraSoonGosWami4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCqvFDpxC-Tavqn8LCVcZqEg" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="lg"/>
                    </a>
                    <a href="https://www.instagram.com/prasoon_goswami/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </a>
                </section>
                <p>© Copyright Prasoon.me</p>
            </div>
        </div>
    )
}

export default AppFooter
