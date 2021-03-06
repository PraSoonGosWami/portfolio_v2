import React, {Suspense} from 'react'
import Styles from './MainComponent.module.css'
import {Route, Switch} from "react-router";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import HomePage from "../../Pages/HomePage/HomePage";
const WorkPage = React.lazy(()=>import( "../../Pages/WorkPage/WorkPage"))
const ContactPage = React.lazy(()=>import( "../../Pages/ContactPage/ContactPage"))
const AboutPage = React.lazy(()=>import( "../../Pages/AboutPage/AboutPage"))
const AppFooter = React.lazy(()=>import( "../AppFooter/AppFooter"))

const MainComponent = (props) => {
    return (
        <div className={Styles.MainComponent}>
            <Suspense fallback={<ProgressBar/>}>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/work'} exact component={WorkPage}/>
                    <Route path={'/contact'} exact component={ContactPage}/>
                    <Route path={'/about'} exact component={AboutPage}/>
                    <Route component={HomePage}/>
                </Switch>
                <AppFooter/>
            </Suspense>
        </div>
    )
}

export default MainComponent
