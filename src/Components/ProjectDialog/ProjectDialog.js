import React, {useEffect, useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Styles from './ProjectDialog.module.css'
import Typography from "@material-ui/core/Typography";
import {CircularProgress, Link} from "@material-ui/core";
import AxiosInstance from '../../Utils/AxiosInstance'
import {set} from "react-ga";
import LinearProgress from "@material-ui/core/LinearProgress";
import {useAlert} from "@prasoongoswami/react_snackbar";

const ProjectDialog = (props) => {
    const data = props.data[0]
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState(null)
    const {addAlert} = useAlert()
    useEffect(() => {
        getProjectDetails()
    }, [])

    const getProjectDetails = () => {
        setLoading(true)
        const id = data.id
        AxiosInstance.get(`/details/${id}.json`)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => {
                addAlert({message:err.message,duration:5000})
            })
            .finally(() => setLoading(false))

    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} scroll={"paper"} className={Styles.ProjectDialog}
        >
            <header>
                <DialogTitle id="scroll-dialog-title">{data.name}</DialogTitle>
                <IconButton color="inherit" onClick={props.handleClose} aria-label="close">
                    <CloseIcon/>
                </IconButton>
            </header>
            <DialogContent dividers={true}>
                {!loading && project && <div className={Styles.ProjectDialogContent}>
                    <section>
                        <iframe src={project.gif}
                                frameBorder="0"
                                width={"100%"}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>
                    </section>
                    <Typography variant={"h6"}>Stack</Typography>
                    <Typography> {data.stack}</Typography>

                    <Typography variant={"h6"}>Details</Typography>
                    <Typography>{project.details}</Typography>

                    <footer>
                        <Link target={"_blank"} href={project.git} color={"secondary"}>View Source</Link>
                        <Link target={"_blank"} href={project.live} color={"secondary"}>View Project</Link>
                    </footer>
                </div>}
                {loading && <LinearProgress color={"secondary"}/>}
            </DialogContent>

        </Dialog>
    )
}

export default ProjectDialog
