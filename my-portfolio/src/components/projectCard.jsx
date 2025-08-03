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
        <div className="image">
        <img src={props.img} alt="Project image here"/>
        </div>
        <div className="projectText">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        <div className="buttonClick">
            <button>{props.codeurl}</button>
            <button>{props.projecturl}</button>
        </div>
        </CARDBORDER>
        
        </>
    )
}

export default ProjectCards;