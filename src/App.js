import React, {useEffect, useState} from 'react';
import Appbar from "./Components/Appbar/Appbar";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import DarkTheme from './UI/MaterialTheme/dark.json'
import LightTheme from './UI/MaterialTheme/light.json'
import Paper from "@material-ui/core/Paper";
import MainComponent from "./Components/MainComponent/MainComponent";
import SideDrawer from "./Components/SideDrawer/SideDrawer";

function App() {
    const [darkMode, setDarkMode] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const darkTheme = createMuiTheme(DarkTheme)
    const lightTheme = createMuiTheme(LightTheme)

    //loads previous set theme mode if available
    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if(theme){
            setDarkMode(JSON.parse(theme).value)
        }
    },[])

    //handles theme changer button
    const themeHandler = () => {
        setDarkMode(prevState => !prevState)
        localStorage.setItem("theme",JSON.stringify({value:!darkMode}))
    }

    //handles drawer menu button
    const drawerHandler = () => {
        setDrawer(prevState => !prevState)
    }
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper style={{minHeight:"100vh"}}>
                <Appbar checked={darkMode} handleChange={themeHandler} drawerHandler={drawerHandler}/>
                <MainComponent/>
                <SideDrawer  checked={darkMode} handleChange={themeHandler} drawer={drawer} drawerHandler={drawerHandler}/>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
