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

const ProjectCards = () => {
    return (
        <>
        
        <CARDBORDER>
        <div className="image">
        <img src="#" alt="Project image here"/>
        </div>
        <div className="projectText">
            <h1>Project title</h1>
            <p>Project description</p>
        </div>
        <div className="buttonClick">
            <button>View Code</button>
            <button>View Project</button>
        </div>
        </CARDBORDER>
        
        </>
    )
}

export default ProjectCards;