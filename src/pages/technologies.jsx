import styled from "styled-components"

const WRAPPER = styled.section `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
  margin-bottom: 50px;
`;

const TECHNOLOGIESBODY = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
padding:20px;

@media (max-width: 768px) {
display:flex;
flex-direction:column;
justify-content:space-around;
padding:10px;
}
`


const Technologies = () => {
    return (
    <>
    <WRAPPER>
    <div classname="technologiesHeader">
        <h1>Technologies</h1>
        <p>I've worked with a range of technologies in the web development world...</p>
        </div>
        <TECHNOLOGIESBODY>
            <div className="LANGUAGES">
            <h1 className="projectTitle">Frontend</h1>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        </ul>
        </div>
        <div className="LANGUAGES">
            <h1 className="projectTitle">Backend</h1>
        <ul>
        <li>MySQL</li>
        <li>Node</li>
        <li>REACT</li>
        </ul>
        </div>
        <div className="LANGUAGES">
            <h1 className="projectTitle">Tools</h1>
        <ul>
        <li>Postman</li>
        <li>APIs</li>
        </ul>
        </div>
        </TECHNOLOGIESBODY>
        </WRAPPER>
    </>
    )
}

export default Technologies;