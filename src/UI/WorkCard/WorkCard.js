import React from 'react'
import Styles from './WorkCard.module.css'
import Typography from "@material-ui/core/Typography";
import DisplayCards from '../../UI/DisplayCards/DisplayCards'
const WorkCard = (props) => {
    return(
        <DisplayCards>
            <div className={Styles.WorkCard} onClick={props.onClick}>
                <Typography variant={"h6"}>{props.title}</Typography>
                <img src={props.img}/>
                <Typography>{props.stack}</Typography>
                <Typography>{props.summary}</Typography>
            </div>
        </DisplayCards>

    )
}

export default WorkCard
