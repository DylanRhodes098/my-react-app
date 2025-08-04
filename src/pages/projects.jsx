import { useState } from "react";
import styled from "styled-components";
import ProjectCards from '../components/projectCard';
import ProjectObject from '../data/projectObject';

const WRAPPER = styled.section `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
  margin-bottom: 50px;
`;

const CARDWRAP = styled.div`
display:grid;
grid-template-columns:60% 60%;
grid-template-rows: auto;
align-items:center;
justify-content:center;
gap:20px;

@media (max-width: 768px) {
grid-template-columns: 110%;
}
`

const Projects = () => {

    const [projectList, setProjectList] = useState(ProjectObject);
    const [originalList, newProjectList] = useState(ProjectObject);

    const onSort = (sortType) => {
        const sorted = [...projectList].sort((a, b) => a[sortType].localeCompare(b[sortType]));
        setProjectList(sorted);
      };
    
      const resetFilters = () => {
        setProjectList(originalList);
      };

    return ( 
    <> 
    <WRAPPER>
  
        <div className = "projectsHeader">
            <h1>Projects</h1>
            </div>
            <div>
            <button onClick={() => onSort('title')}>Sort by Title</button>
            <button onClick={resetFilters}>Reset</button>
        </div>
      
        <CARDWRAP>
     
  {projectList.map((project, index) => (
    <ProjectCards
      key={index}
      img={project.img}
      title={project.title}
      description={project.description}
      projecturl={project.projecturl}
      codeurl={project.codeurl}
    />
  ))}
        </CARDWRAP>
    </WRAPPER>
    </>
        )
}

export default Projects;