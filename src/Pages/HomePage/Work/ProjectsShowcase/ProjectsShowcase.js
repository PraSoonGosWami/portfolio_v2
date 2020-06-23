import React from 'react'
import Styles from './ProjectsShowcase.module.css'
import WorkCard from "../../../../UI/WorkCard/WorkCard";
const ProjectsShowcase = (props) => {
   const projects = props.data

    return(
        <div className={Styles.ProjectsShowcase}>
            {projects && projects.map(item => {
                return (
                <WorkCard
                    key={item.id}
                    title={item.name}
                    img={item.img}
                    stack={item.stack}
                    summary={item.summary}
                />
                )
            })}
        </div>
    )
}

export default ProjectsShowcase
