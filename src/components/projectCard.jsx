import styled from "styled-components"

const CARDBORDER = styled.div`
border:solid;
border-radius:10px;
padding:10px;
margin:10px;
display:flex;
flex-direction:column;
align-items:space-between;
justify-content:flex-start;
`

const ProjectCards = (props) => {
    return (
        <>
        
        <CARDBORDER>
        <img className="projectImages" src={props.img} alt="Project image here"/>
        <div className="projectText">
            <h1 className="projectTitle">{props.title}</h1>
            <p className="projectDescription">{props.description}</p>
        </div>
        <div>
        <a href={props.codeurl} target="_blank" rel="noopener noreferrer">
        <button>View Code</button></a>
        <a href={props.projecturl} target="_blank" rel="noopener noreferrer">
        <button>View Project</button></a>
        </div>
        </CARDBORDER>
        
        </>
    )
}

export default ProjectCards;