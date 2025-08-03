import styled from "styled-components";
import ProjectCards from '../components/projectCard';

const WRAPPER = styled.section `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
  margin-bottom: 50px;
`;

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
    <WRAPPER>
        <div className = "projectsHeader">
            <h1>Projects</h1>
        </div>
        <CARDWRAP>
        <ProjectCards
            img="#"
            title="hi there haha"
            description="hi there haha"
            projecturl="#"
            codeurl="#"/>
        <ProjectCards></ProjectCards>
        <ProjectCards></ProjectCards>
        <ProjectCards></ProjectCards>
        </CARDWRAP>
        </WRAPPER>
    </>
        )
}

export default Projects;