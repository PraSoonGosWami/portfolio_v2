import React from 'react'
import Styles from './HomePage.module.css'
import Introduction from "./Introduction/Introduction";
import SkewView from "../../UI/SkewView/SkewView";
const Skills = React.lazy(()=>import("./Skills/Skills"))
const Work = React.lazy(()=>import("./Work/Work"))
const Techs = React.lazy(()=> import('./Techs/Techs'))
const Services = React.lazy(()=>import("./Services/Services"))

const HomePage = () => {
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
            <Services/>
        </div>

    )
}

export default HomePage
