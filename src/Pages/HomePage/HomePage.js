import React from 'react'
import Styles from './HomePage.module.css'
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import SkewView from "../../UI/SkewView/SkewView";
const HomePage = (props) => {
    return(
        <div className={Styles.HomePage}>
            <Introduction/>
            <SkewView title={"Skills"}>
                <Skills/>
            </SkewView>
        </div>

    )
}

export default HomePage
