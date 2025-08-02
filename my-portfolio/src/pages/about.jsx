import styled from 'styled-components';

const AboutHeader = styled.div`
  margin-bottom: 30px;
`;

const WrapAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

const AboutBody = styled.div`
  max-width: 500px;
`;

const HeadShot = styled.div`
  width: 200px;
  height: 100px;
  border: solid;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const About = () => {
  return (
    <>
      <AboutHeader>
        <h1>Dylan Rhodes' Portfolio</h1>
        <p>
          I strive to create software with the user in mind using cutting-edge technologies, innovating, and crafting elegant user experiences.
        </p>
        <button>Click Me</button>
      </AboutHeader>

      <WrapAbout>
        <AboutBody>
          <h2>About Me</h2>
          <p>
            A Business Marketing and Management graduate with a strong background in personal training. I’m eager to contribute to a high-growth startup and learn how a company really operates from the inside.
          </p>
        </AboutBody>

        <HeadShot>
          <p>👤</p>
        </HeadShot>
      </WrapAbout>
    </>
  );
};

export default About;