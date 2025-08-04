import styled from 'styled-components';

const WRAPPER = styled.section `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
`;

const ABOUTHEADER = styled.div`
  margin-bottom: 20px;
`;

const WRAPABOUT = styled.div`
  display: grid;
  grid-template-columns:1fr auto;
  grid-template-rows: auto;
  justify-content: space-between;
  align-items: space-between;
  gap: 40px;

  @media (max-width: 1100px) {
  grid-template-columns:auto;
  grid-template-rows: 1fr 1fr;
}
`;

const ABOUTBODY = styled.div`
 
`;

const HeadShot = styled.div`
  width: 300px;
  height: 100px;
`;

const About = () => {
  return (
    <>
    <WRAPPER>
      <ABOUTHEADER>
        <h1>Dylan Rhodes' Portfolio</h1>
        <p>
          I strive to create software with <br></br> the user in mind using cutting-edge technologies, <br></br>innovating, and crafting elegant user experiences.
        </p>
        <a href="/softwarecv.pdf" target="_blank" rel="noopener noreferrer">
        <button>CV</button></a>
      </ABOUTHEADER>

      <WRAPABOUT>
        <ABOUTBODY>
          <h1>About Me</h1>
          <p>
          A full-stack developer with a bachelor’s degree in Business Marketing and Management.
          Passionate about building and delivering effective digital solutions, my skills focus on
          Javascript and Python, also proficient in HTML and CSS. Complimented with expertise in
          Git/GitHub, React, navigating REST API’s and experience with Databases using SQL.
          </p>
        </ABOUTBODY>

        <HeadShot>
        <img className="aboutImage" src="/portfolioImg.jpeg" alt="Project image here"/>
        </HeadShot>
      </WRAPABOUT>
      </WRAPPER>
     
    </>
  );
};

export default About;