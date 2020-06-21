import React, {Suspense} from 'react'
import Styles from './MainComponent.module.css'
import {Route, Switch} from "react-router";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import HomePage from "../../Pages/HomePage/HomePage";
import AppFooter from "../../UI/AppFooter/AppFooter";

const MainComponent = (props) => {
    return (
        <div className={Styles.MainComponent}>
            <Suspense fallback={<ProgressBar/>}>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>
                </Switch>
                <AppFooter/>
            </Suspense>
        </div>
    )
}

export default MainComponent
