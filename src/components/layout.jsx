import {useState} from "react";
import styled from 'styled-components';
import Footer from "./footer";
import GlobalStyle from '../styles/globalStyles';
import SocialLinks from './socialLinks';
import Logo from './logo'
import Logo2 from './logo2'
import pages from '../data/navObject';

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.main`
  padding: 20px;
`;

// - - - NAVIGATION - - - //
// - - - WRAPPING - - - //
const PrimaryNavWrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
  padding: 35px;

  @media (max-width: 768px) {
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:space-between;
`

const SecondaryNavWrapper = styled.nav `
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  gap:40px;
  cursor:pointer;
  position:fixed;
  background-color:black;
  width:100%;
    margin: 0 auto;
  padding-top: 0 auto;

  @media (max-width: 768px) {
 display: none;
  }
`;

const BurgerPrimaryWrap = styled.nav `
  display: flex;
  flex-direction: column; 
  gap: 8px;
  position: relative;
  }
}
`;

const BurgerSecondaryWrap = styled.div `
display: ${(props) => (props.openBurger ? "block" : "none")};
cursor:pointer;
position:absolute;
top:70%;

 @media (min-width: 768px) {
 display: none;
  }
}
`;

// - - - Initiate main function - - - //
const Layout = ({ children, chosenPage, choosePage }) => {

  // - - - Define useState tools - - - //
const [pageList, setPageList] = useState(pages);
const [openBurger, setOpenBurger] = useState(false);

// - - - Create burger function - - - //
const Burger = () => {
  return (
    <>
    <BurgerPrimaryWrap>
    <button className="burgerButton" onClick={() => setOpenBurger(!openBurger)}
    aria-expanded={openBurger}
    aria-controls="BurgerNavWrap"> ≡ </button>
  
  <BurgerSecondaryWrap openBurger={openBurger}>
    <p>{selectPage()}</p>
        
      </BurgerSecondaryWrap>
      </BurgerPrimaryWrap>
      </>
  )
}

// - - - Create navigation function - - - //
const selectPage = () => {
  return pageList.map((page) => {
    return (
      <p className="nav" key={page.key} 
      onClick={() => choosePage(page.key)}
      >{page.value}</p>
  )})
  }

  // - - - Trigger JSX - - - //
    return (
      <>
      {/* Inject global styles */}
      <GlobalStyle />
      {/* Wrap navigation */}
      <PrimaryNavWrapper>
      <SecondaryNavWrapper>
        <Logo></Logo>
        {/* Inject navigation function */}
        {selectPage()}
        <SocialLinks></SocialLinks>
      </SecondaryNavWrapper>
      <Logo2></Logo2>
      <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
      </PrimaryNavWrapper>
      {/* Wrap body */}
      <Wrapper>
        {children}
        <Footer></Footer>
      </Wrapper>
      </>
    );
  };

  
export default Layout;