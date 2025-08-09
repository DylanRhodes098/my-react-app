import { useState } from "react";
import styled from "styled-components";
import ProjectCards from '../components/projectCard';
import ProjectObject from '../data/projectObject';

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.main `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
  margin-bottom: 50px;
`;

// - - - PROJECTS - - - //
// - - - WRAPPING - - - //
const ProjectsHeaderWrap = styled.section`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  }`
  
  const ProjectsBodyWrap = styled.div`
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
// - - - Define usestate tools - - - //
    const [projectList, setProjectList] = useState(ProjectObject);
    const [originalList, newProjectList] = useState(ProjectObject);

    // - - - Define sort button funciton - - - //
    const onSort = (sortType) => {
        const sorted = [...projectList].sort((a, b) => a[sortType].localeCompare(b[sortType]));
        setProjectList(sorted);
      };
    // - - - Define reset filter function - - - //
      const resetFilters = () => {
        setProjectList(originalList);
      };

    return ( 
    <> 
    {/* Wrap body */}
    <Wrapper>
       {/* Wrap project header */}
        <ProjectsHeaderWrap>
            <h1>Projects</h1>
            </ProjectsHeaderWrap>
            <div>
               {/* inject filter functions */}
            <button onClick={() => onSort('title')}>Sort by Title</button>
            <button onClick={resetFilters}>Reset</button>
        </div>
        {/* Wrap project content */}
        <ProjectsBodyWrap>
           {/* Inject use state tools */}
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
        </ProjectsBodyWrap>
    </Wrapper>
    </>
        )
}

export default Projects;