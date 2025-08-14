import styled from "styled-components"
import Technologies from "../components/technologies";

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.main`
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
`;

// - - - ABOUT - - - //
// - - - WRAPPING - - - //
const AboutWrap = styled.section`
  display: flex;
  flex-direction:rows;
  justify-content: space-between;
  align-items: space-between;
  gap: 40px;
  margin-bottom:25%;

  @media (max-width: 1000px) {
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-bottom:40%;
  text-align:center;
}
`;

const About = () => {
    return (
    <>
    {/* Wrap body */}
    <Wrapper>
        <h1 className="aboutText">About Me</h1>
        <h3 className="aboutText">I'm Dylan Rhodes, a Full-Stack<br></br> developer based in Essex.</h3>
        {/* Wrap about content */}
        <AboutWrap>
          <div className="aboutText">
        <p>
        I graduated from a full-stack development cohort in 2025, achieving a level 4 BSC, which has provided a solid foundation in website, application and database development. My passion for  development has driven me to master a wide range of creative tools and software. Currently early on my journey, I am constantly learning and developing my skillset in designing websites and applications and building efficient software tools.<br></br><br></br> 
With a background that blends both technical and creative disciplines, I bring a unique perspective to every project, enabling me to communicate effectively with clients, developers, and stakeholders alike. I'm comfortable bridging the gap between design and development, ensuring ideas are both visually compelling and technically sound.<br></br><br></br>
Outside of work, I’m a bookworm, fitness enthusiast and dedicated foodie. I love to explore reads involving psychology, philosophy and entrepreneurship - favourites including Homo Deus and Behave.
        </p>
        </div>
        <div>
        <img className="aboutImage" src="/portfolioImg.jpeg" alt="Project image here"/>
        </div>
        </AboutWrap>
        </Wrapper>

        {/* Inject technologies component*/}
    <Technologies></Technologies>
  
    </>
        )
}
export default About;