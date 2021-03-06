import React from 'react'
import Styles from './Techs.module.css'
import Typography from "@material-ui/core/Typography";

import {Icon} from '@iconify/react';
import firebaseIcon from '@iconify/icons-logos/firebase';
import reactIcon from '@iconify/icons-logos/react'
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import androidIcon from '@iconify/icons-logos/android-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';
import javaIcon from '@iconify/icons-logos/java';
import pythonIcon from '@iconify/icons-logos/python';
import ionic from '@iconify/icons-logos/ionic';
import Flutter from '@iconify/icons-logos/flutter';

const Techs = (props) => {
    return(
        <div className={Styles.Techs}>
            <main>
                <div>
                    <header>
                        <Icon icon={reactIcon}/>
                    </header>
                    <Typography variant={"h6"}>React Js</Typography>
                </div>
                <div>
                    <header>
                        <Icon icon={nodejsIcon}/>
                    </header>
                    <Typography variant={"h6"}>Node Js</Typography>
                </div>
                <div>
                    <header>
                        <Icon icon={androidIcon}/>
                    </header>
                    <Typography variant={"h6"}>Android</Typography>
                </div>

            </main>
            <main>
                <div>
                    <header>
                        <Icon icon={javascriptIcon}/>
                    </header>
                    <Typography variant={"h6"}>Javascript</Typography>
                </div>
                <div>
                    <header>
                        <Icon icon={javaIcon}/>
                    </header>
                    <Typography variant={"h6"}>Java</Typography>
                </div>
                <div>
                    <header>
                        <Icon icon={firebaseIcon}/>
                    </header>
                    <Typography variant={"h6"}>Firebase</Typography>
                </div>

            </main>
            <main>
                <div>
                    <header>
                        <Icon icon={pythonIcon}/>
                    </header>
                    <Typography variant={"h6"}>Python</Typography>
                </div>
                <div>
                    <header>
                        <Icon icon={Flutter}/>
                    </header>
                    <Typography variant={"h6"}>Flutter</Typography>
                </div>
                <div>
                    <header>
                        <Icon icon={ionic}/>
                    </header>
                    <Typography variant={"h6"}>Ionic</Typography>
                </div>

            </main>
        </div>
    )
}

export default Techs
