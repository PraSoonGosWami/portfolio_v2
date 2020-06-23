import React, {useEffect, useState} from 'react'
import Styles from './WorkPage.module.css'
import Container from "@material-ui/core/Container";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import AxiosInstance from '../../Utils/AxiosInstance'
import ProjectsShowcase from "../HomePage/Work/ProjectsShowcase/ProjectsShowcase";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ProjectFilter from '../../Utils/ProjectFilter.json'
import MenuItem from "@material-ui/core/MenuItem";
const WorkPage = (props) => {
    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)
    const [filters] = useState(ProjectFilter)
    const [dropDownValue, setDropDownValue] = useState("all")
    const [filteredArray, setFilteredArray] = useState(null)
    useEffect(()=>{
        window.scrollTo(0,0)
        getProjects()
    },[])

    //get project from server
    const getProjects = () => {
        setLoading(true)
        AxiosInstance.get('/projects.json')
            .then(res => {
                setProjects(res.data.reverse())
                setFilteredArray(res.data)
            })
            .catch(err => {})
            .finally(()=> setLoading(false))
    }

    const onDropDownChangeHandler = (event) => {
        setDropDownValue(event.target.value)
        filterArray(event.target.value)
    }

    //filters the project array according to drop down value
    const filterArray = (query) => {
        setFilteredArray(null)
        setLoading(true)
        const fArray = [...projects]
        if(query === "all"){
            setFilteredArray(fArray)
            setLoading(false)
            return
        }
        const res = fArray.filter(item => {
            return item.keywords.includes(query)
        })
        setFilteredArray(res)
        setLoading(false)
    }

    return(
        <Container maxWidth={"lg"} className={Styles.WorkPage}>
            <header>
                <Typography variant={"h4"}>Work</Typography>
                <TextField
                    value={dropDownValue}
                    onChange={(event => onDropDownChangeHandler(event))}
                    select
                    variant={"outlined"}
                    label={"Filter"}
                    size={"small"} color={"secondary"}>
                    {Object.keys(filters).map(code => {
                        return <MenuItem key={code} value={code}>{filters[code]}</MenuItem>
                    })}
                </TextField>
            </header>
            {loading && <ProgressBar/>}
            {!loading && filteredArray && <ProjectsShowcase data={filteredArray}/>}
        </Container>
    )
}

export default WorkPage
