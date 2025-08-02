import styled from "styled-components"

const TECHNOLOGIESBODY = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
padding:20px;`


const Technologies = () => {
    return (
    <>
    <div classname="technologiesHeader">
        <h1>Technologies</h1>
        <p>I've worked with a range of technologies in the web development world</p>
        </div>
        <TECHNOLOGIESBODY>
            <div className="LANGUAGES">
            <h2>Frontend</h2>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        </ul>
        </div>
        <div className="LANGUAGES">
            <h2>Backend</h2>
        <ul>
        <li>MySQL</li>
        <li>Node</li>
        <li>REACT</li>
        </ul>
        </div>
        <div className="LANGUAGES">
            <h2>Tools</h2>
        <ul>
        <li>Postman</li>
        <li>APIs</li>
        </ul>
        </div>
        </TECHNOLOGIESBODY>
    </>
    )
}

export default Technologies;