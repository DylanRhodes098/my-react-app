import styled from "styled-components"

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.div`
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
        {/* Wrap body */}
        <Wrapper>
        <img className="projectImages" src={props.img} alt="Project image here"/>
        {/* Wrap text */}
        <div>
            <h1 className="projectHeader">{props.title}</h1>
            <p>{props.description}</p>
        </div>
        {/* Wrap buttons */}
        <div>
        <a href={props.codeurl} target="_blank" rel="noopener noreferrer">
        <button>View Code</button></a>
        <a href={props.projecturl} target="_blank" rel="noopener noreferrer">
        <button>View Project</button></a>
        </div>
        </Wrapper>
        
        </>
    )
}

export default ProjectCards;