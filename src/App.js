import React, {useEffect, useState} from 'react';
import Appbar from "./Components/Appbar/Appbar";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import DarkTheme from './UI/MaterialTheme/dark.json'
import LightTheme from './UI/MaterialTheme/light.json'
import Paper from "@material-ui/core/Paper";
import MainComponent from "./Components/MainComponent/MainComponent";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import {SnackBarProvider} from "@prasoongoswami/react_snackbar";
import ReactGA from 'react-ga';


function App() {
    //google analytics
    function initializeReactGA() {
        ReactGA.initialize('UA-170869453-1');
        ReactGA.pageview('/');
        ReactGA.pageview('/about');
        ReactGA.pageview('/work');
        ReactGA.pageview('/contact');
    }

    useEffect(() => {
        initializeReactGA()
    }, [])


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
        /*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            setDarkMode(true)
        }*/
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
            <SnackBarProvider>
                <Paper style={{minHeight:"100vh"}}>
                    <Appbar checked={darkMode} handleChange={themeHandler} drawerHandler={drawerHandler}/>
                    <MainComponent/>
                    <SideDrawer  checked={darkMode} handleChange={themeHandler} drawer={drawer} drawerHandler={drawerHandler}/>
                </Paper>
            </SnackBarProvider>
        </ThemeProvider>
    );
}

export default App;
