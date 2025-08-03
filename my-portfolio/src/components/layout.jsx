import styled from 'styled-components';
import Footer from "./footer";
import GlobalStyle from '../styles/globalStyles';

const MainWrapper = styled.main`
  padding: 20px;

`;

const WRAPNAV = styled.nav `
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap:40px;
  cursor:pointer;
`;

const pages = [
  {key:"about", 
  value: "About"
}, {
  key:"projects",
  value: "Projects"
}, {
  key:"technologies",
  value: "Technologies"
}];

const Layout = ({ children, chosenPage, choosePage }) => {

const selectPage = () => {
  return pages.map((page) => {
    return (
      <p key={page.key} 
      onClick={() => choosePage(page.key)}
      >{page.value}</p>
  )})
  }

    return (
      <>
      <GlobalStyle />
      <WRAPNAV>
        {selectPage()}
      </WRAPNAV>
      <MainWrapper>
        {children}
        <Footer></Footer>
      </MainWrapper>
      </>
    );
  };

  

export default Layout;