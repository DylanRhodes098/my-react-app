import styled from 'styled-components';
import Footer from "./footer";
import About from "../pages/about"

const MainWrapper = styled.main`

padding: 20px;
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
  return (
    pages.map((page) => {
      <li key={pages.key} 
      onClick={() => choosePage(page.key)}
      >{pages.value}</li>
    }))
  }

    return (
      <>
      <ul>
        {selectPage()}
      </ul>
      <MainWrapper>
        {children}
        <Footer></Footer>
      </MainWrapper>
      </>
    );
  };

  

export default Layout;