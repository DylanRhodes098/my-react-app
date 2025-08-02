import styled from "styled-components";
import ProjectCards from '../components/projectCard';

const CARDWRAP = styled.div`
display:grid;
grid-template-columns:500px 500px;
grid-template-rows: auto;
align-items:center;
justify-content:center;

@media (max-width: 768px) {
grid-template-columns: 500px;
}
`

const Projects = () => {
    return ( 
    <> 
        <div className = "projectsHeader">
            <h1>Projects</h1>
        </div>
        <CARDWRAP>
        <ProjectCards></ProjectCards>
        <ProjectCards></ProjectCards>
        <ProjectCards></ProjectCards>
        <ProjectCards></ProjectCards>
        </CARDWRAP>
    </>
        )
}

export default Projects;