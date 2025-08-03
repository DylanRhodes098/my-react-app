import styled from 'styled-components';

const WRAPPER = styled.section `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
  margin-bottom: 50px;
`;

const ABOUTHEADER = styled.div`
  margin-bottom: 50px;
`;

const WRAPABOUT = styled.div`
  display: grid;
  grid-template-columns:1fr auto;
  grid-template-rows: auto;
  justify-content: space-between;
  align-items: space-between;
  gap: 40px;

  @media (max-width: 768px) {
  grid-template-columns:auto;
  grid-template-rows: 1fr 1fr;
}
`;

const ABOUTBODY = styled.div`
 
`;

const HeadShot = styled.div`
  width: 200px;
  height: 100px;
  border: solid;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

    @media (max-width: 768px) {
  width: 400px;
  height: 200px;
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
        <button>Click Me</button>
      </ABOUTHEADER>

      <WRAPABOUT>
        <ABOUTBODY>
          <h1>About Me</h1>
          <p>
            A Business Marketing and Management graduate with a strong background in personal training. I’m eager to contribute to a high-growth startup and learn how a company really operates from the inside.
          </p>
        </ABOUTBODY>

        <HeadShot>
          <p>👤</p>
        </HeadShot>
      </WRAPABOUT>
      </WRAPPER>
     
    </>
  );
};

export default About;