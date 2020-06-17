import React from 'react'
import Styles from './Skills.module.css'
import Typography from "@material-ui/core/Typography";
import FSDEVIMG from '../../../Assets/FSDEV.svg'
import ADEVIMG from '../../../Assets/ADEV.svg'
import CDEVIMG from '../../../Assets/CDEV.svg'
const Skills = (props) => {
    return(
        <div className={Styles.Skills}>
            <div>
                <header>
                    <img src={FSDEVIMG} alt={"Full stack development"}/>
                </header>
                <Typography variant={"h6"}>Full stack development</Typography>
            </div>
            <div>
                <header>
                    <img src={ADEVIMG} alt={"Android development"}/>
                </header>
                <Typography variant={"h6"}>Android development</Typography>
            </div>
            <div>
                <header>
                    <img src={CDEVIMG} alt={"Cloud development"}/>
                </header>
                <Typography variant={"h6"}>Cloud development</Typography>
            </div>
        </div>
    )
}

export default Skills
