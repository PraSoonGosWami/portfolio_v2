import React, {useState} from 'react'
import Styles from './ProjectsShowcase.module.css'
import WorkCard from "../WorkCard/WorkCard";
import ProjectDialog from "../ProjectDialog/ProjectDialog";

const ProjectsShowcase = (props) => {
    const projects = props.data
    const [open, setOpen] = useState(false)
    const [projectDetails, setProjectDetails] = useState(null)
    const openProjectDialog = (id) => {
        setProjectDetails(projects.filter(item=> item.id === id))
        setOpen(true)
    }
    return (
        <React.Fragment>
            <div className={Styles.ProjectsShowcase}>
                {projects && projects.map(item => {
                    return (
                        <WorkCard
                            key={item.id}
                            title={item.name}
                            img={item.img}
                            stack={item.stack}
                            summary={item.summary}
                            onClick={() => openProjectDialog(item.id)}
                        />
                    )
                })}
            </div>
            {open && projectDetails && <ProjectDialog
                open={open}
                handleClose={() => setOpen(false)}
                data={projectDetails}
            />}
        </React.Fragment>
    )
}

export default ProjectsShowcase
