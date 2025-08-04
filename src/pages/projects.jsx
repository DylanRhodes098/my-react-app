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
gap:20px;

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
            img= "/weatherDashboard.jpeg"
            title="Weather Dashboard"
            description="The objective was to create a weather dashboard that integrated an API to fetch weather data in response to a location input.

We started this task by assigning relevant duties to team members, utlising eachother's strengths to create an efficient workflow. We adopted a collaborative approach to wireframing, where all group members voiced their opinions on the UX of the dashboard.

"
            projecturl="https://dylanrhodes098.github.io/iWeather.io/"
            codeurl="https://github.com/DylanRhodes098/iWeather.io.git"/>
        <ProjectCards img= "/notesApp.jpeg"
            title="Notes Application"
            description="An interactive note taking application that allows users to create, read, update and delet notes. Users notes are stored in a data base which can also be edited.

"
            projecturl="https://notes-application-i7v1.onrender.com"
            codeurl="https://github.com/DylanRhodes098/notes-application.git"/>
        <ProjectCards img= "/readMeGen.jpeg"
            title="README Generator"
            description="Seamlessly generates a Readme file for developers to use on their projects. After successfully following the installation instructions. Navigate to the file 'main.py', and run in the terminal 'python3 main.py'. Answer each prompt as you wish.

"
            projecturl="https://youtu.be/XEr8hqPsQIA"
            codeurl="https://github.com/DylanRhodes098/readme-generator.git"/>
        <ProjectCards img= "/bootStrapWeb.jpeg"
            title="Bootstrap E-commerce Homepage"
            description="A fully responsive e-commerce website for a fictional clothing brand, built using HTML, CSS and Bootstrap. The website showcases modern clothing products with a clean design, intuitive navigation, and basic cart functionality.

"
            projecturl="https://dylanrhodes098.github.io/bootstrap-webpage/"
            codeurl="https://github.com/DylanRhodes098/bootstrap-webpage.git"/> 
        </CARDWRAP>
        </WRAPPER>
    </>
        )
}

export default Projects;