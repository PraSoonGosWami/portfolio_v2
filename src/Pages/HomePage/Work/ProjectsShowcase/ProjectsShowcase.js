import React, {useEffect, useState} from 'react'
import Styles from './ProjectsShowcase.module.css'
import Shopperscart from '../../../../Assets/scart.PNG'
import Portfolio from '../../../../Assets/port.PNG'
import C2s from '../../../../Assets/c2s.PNG'
import WorkCard from "../../../../UI/WorkCard/WorkCard";
const ProjectsShowcase = (props) => {
    const [projects, setProjects] = useState(null)

    const getProducts = () => {
        setProjects([
            {
                id: "p001",
                name: "Click2Short",
                img : C2s,
                details: "Click2Short is an Url shortening service like bitly, you can create your account, create customised short url which can be easily remembered and shared.Click2Short also provides you with the analytics which helps your track number of hits and your user engagement",
                stack: "Express | NodeJs | ReactJs | MongoDb",
                url:"https://c2s.prasoon.me/",
                git:"https://github.com/PraSoonGosWami/click2short"
            },
            {
                id: "p002",
                name: "Shopper's Cart",
                img : Shopperscart,
                details: "An e-commerce web app clone with PWA, similar to Flipkart and Amazon.  It includes demo products which showcase a real use scenario just like any e-commerce website. Made with responsive web designs and a mobile-first approach",
                stack: "HTML5 | CSS3 | ReactJs | Firebase",
                url:"https://shopperscart.tiddler.tech/",
                git:"https://github.com/PraSoonGosWami/ShoppersCart"
            },
            {
                id: "p003",
                name: "Prasoon | Portfolio",
                img : Portfolio,
                details: "This is my portfolio website displaying my skills sets and latest projects",
                stack: "ReactJs | Firebase | Responsive Design",
                url:"https://prasoon.me",
                git:"https://github.com/PraSoonGosWami/Portfolio"
            }])
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div className={Styles.ProjectsShowcase}>
            {projects && projects.map(item => {
                return (
                <WorkCard
                    key={item.id}
                    title={item.name}
                    img={item.img}
                    summary={item.stack}
                />
                )
            })}
        </div>
    )
}

export default ProjectsShowcase
