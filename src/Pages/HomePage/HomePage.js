import React from 'react'
import Styles from './HomePage.module.css'
import Introduction from "./Introduction/Introduction";
import SkewView from "../../UI/SkewView/SkewView";
import Features from "./Features/Features";
const Skills = React.lazy(()=>import("./Skills/Skills"))
const Work = React.lazy(()=>import("./Work/Work"))
const Techs = React.lazy(()=> import('./Techs/Techs'))
const HomePage = (props) => {
    return(
        <div className={Styles.HomePage}>
            <Introduction/>
            <SkewView title={"Skills"}>
                <Skills/>
            </SkewView>
            <Work/>
            <SkewView title={"Techs & tools"}>
                <Techs/>
            </SkewView>
            <Features/>
        </div>

    )
}

export default HomePage
