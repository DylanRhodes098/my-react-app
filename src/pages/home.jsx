import styled from 'styled-components';
import Technologies from "../components/technologies";

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.main `
  max-width: 70%;
  margin: 0 auto;
  padding: 0 auto;
`;

// - - - HEADER - - - //
// - - - WRAPPING - - - //

const HeaderWrap = styled.section`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  gap:40px;
  width: 100%;
  margin-bottom:25%;

  @media (max-width: 1000px) {
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-bottom:40%;
  text-align:center;
}
`;

// - - - Initiate body function - - - //
const Home = () => {
  // - - - Trigger JSX - - - //
  return (
    <>
    {/* Wrap body */}
    <Wrapper>
        <h1 className="homeText">Dylan Rhodes</h1>
        <h3 className="homeText">Full-stack Developer</h3>
         {/* Wrap header content */}
        <HeaderWrap>
          <div className="homeText">
        <p>
        A recently qualified full-stack developer currently building websites for local businesses and retailers. <br></br><br></br>
With a keen eye for detail and a diverse skill set, I bring a unique and versatile approach to every project.<br></br><br></br>
I’m passionate about blending creativity and technical precision to craft bold and dynamic websites and applications.  
        </p>
        <a href="/softwarecv.pdf">
        <button>My CV</button></a>
        </div>
        <div>
        <img className="homeImage" src="/portfolioImg.jpeg" alt="Project image here"/>
        </div>
        </HeaderWrap>
    </Wrapper>

  {/* Inject technologies component*/}
  <Technologies></Technologies>
    </>
        )
}

export default Home;